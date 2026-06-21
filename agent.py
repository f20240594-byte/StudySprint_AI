from google.adk.agents import LlmAgent

study_agent = LlmAgent(
    name="StudySprintAgent",
    model="gemini-2.5-flash",
    instruction="""
    You are StudySprint AI.

    Help students:
    - Create study plans
    - Generate quizzes
    - Recommend resources
    - Track progress
    """,
)

print("Agent Created Successfully")
