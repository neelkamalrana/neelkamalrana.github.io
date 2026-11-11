// Only mark a project live after its implementation and evaluation are published.
export const aiProjects = [
  {
    id: "document-answer-desk",
    number: "01",
    title: "Document Answer Desk",
    category: "RAG / Retrieval / Evaluation",
    status: "Planned",
    description:
      "Questions answered from a focused document collection, with citations and room to say “I don’t know.”",
    scope:
      "Start with a small collection of public support policies. Ask a question, inspect the retrieved passages, and receive an answer linked to its sources.",
    approach: [
      "Split documents into passages and retain source metadata.",
      "Retrieve relevant passages with embeddings, then generate a grounded answer.",
      "Show supporting passages and decline questions the collection cannot answer.",
    ],
    evaluation:
      "Build a labeled set of answerable and unanswerable questions. Measure retrieval recall, citation support, abstention behavior, latency, and estimated request cost.",
    firstStep:
      "Choose a public document collection and write 20 reference questions before building the retrieval pipeline.",
    tools: "Proposed: Python, a vector index, a model API, and React.",
  },
  {
    id: "ticket-classifier",
    number: "02",
    title: "Ticket Classifier",
    category: "Machine learning / NLP",
    status: "Planned",
    description:
      "A small text classifier, built from a simple baseline and measured on held-out examples.",
    scope:
      "Paste a support ticket and predict its category. Keep the initial categories narrow and display the model’s limitations alongside its prediction.",
    approach: [
      "Inspect a public labeled dataset and split it before fitting any text transformations.",
      "Compare a majority-class baseline with TF-IDF and logistic regression.",
      "Review errors by category and provide a compact prediction interface.",
    ],
    evaluation:
      "Report macro F1, per-class precision and recall, and a confusion matrix on held-out data. Review duplicate leakage and class imbalance before interpreting results.",
    firstStep:
      "Select a licensed dataset, inspect the labels, and establish the majority-class baseline.",
    tools: "Proposed: Python, pandas, scikit-learn, and React.",
  },
  {
    id: "support-reply-assistant",
    number: "03",
    title: "Support Reply Assistant",
    category: "LLM workflows / Human review",
    status: "Planned",
    description:
      "Policy-grounded reply drafts with a person in control of the final response.",
    scope:
      "Combine a sample support ticket with relevant policy passages to produce an editable draft. No automatic sending or real inbox integration in the first version.",
    approach: [
      "Retrieve relevant policy passages for the ticket.",
      "Produce a structured draft with source references and missing-information flags.",
      "Let a reviewer edit or discard the draft; keep external actions out of the workflow.",
    ],
    evaluation:
      "Use sample tickets to assess policy support, unsupported promises, missing-information handling, response time, and estimated cost. Include adversarial instructions in ticket text.",
    firstStep:
      "Write a small policy collection and representative ticket examples, then define a human-review rubric.",
    tools: "Proposed: Python, structured model outputs, retrieval, and React.",
  },
];
