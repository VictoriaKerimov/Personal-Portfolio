from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI()


# ---------- Models ----------

class ContactSubmission(BaseModel):
    id: int
    name: str = Field(min_length=1, max_length=100)
    email: str
    message: str = Field(min_length=1, max_length=1000)


class Project(BaseModel):
    id: int
    title: str
    description: str
    tech: list[str]


class Recommendation(BaseModel):
    id: int
    author: str = Field(min_length=1, max_length=100)
    note: str = Field(min_length=1, max_length=500)


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    email: str
    message: str = Field(min_length=1, max_length=1000)


class RecommendationUpdate(BaseModel):
    note: str = Field(min_length=1, max_length=500)


# ---------- In-memory "database" ----------

contact_submissions: list[ContactSubmission] = [
    ContactSubmission(
        id=1,
        name="Example Name",
        email="example@example.com",
        message="example message",
    ),
]

projects: list[Project] = [
    Project(
        id=1,
        title="Tab Gatekeeper",
        description="Chrome extension that helps you stay on task.",
        tech=["JavaScript", "Chrome Extensions"],
    ),
    Project(
        id=2,
        title="Personal Portfolio",
        description="My portfolio site built with React and TypeScript.",
        tech=["React", "TypeScript", "Vite"],
    ),
]

recommendations: list[Recommendation] = [
    Recommendation(
        id=1,
        author="Ananya Nakka",
        note="My best friend",
    ),
]


# ---------- Endpoints ----------

@app.get("/")
def main():
    return {"message": "Hello World"}


@app.get("/projects/{project_id}", response_model=Project)
def get_project(project_id: int):
    for project in projects:
        if project.id == project_id:
            return project
    raise HTTPException(status_code=404, detail="Project not found")


@app.post("/contact", response_model=ContactSubmission, status_code=201)
def create_contact(submission: ContactCreate):
    if "@" not in submission.email:
        raise HTTPException(status_code=400, detail="Invalid email address")
    new_id = max((c.id for c in contact_submissions), default=0) + 1
    new_submission = ContactSubmission(id=new_id, **submission.model_dump())
    contact_submissions.append(new_submission)
    return new_submission


@app.put("/recommendations/{recommendation_id}", response_model=Recommendation)
def update_recommendation(recommendation_id: int, update: RecommendationUpdate):
    for rec in recommendations:
        if rec.id == recommendation_id:
            rec.note = update.note
            return rec
    raise HTTPException(status_code=404, detail="Recommendation not found")