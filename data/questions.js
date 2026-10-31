const allQuestions = Array.from({ length: 10 }, (_, i) => window[`allQuestions${i + 1}`] || [])
                        .flat();
