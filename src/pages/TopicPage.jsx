import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const TopicPage = () => {
  const { unitId, topicSlug } = useParams();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Map topic names to topic data keys
    const topicDataMap = {
      arrays: 'arrays',
      'linked-lists': 'linked-lists',
      'sparse-matrices': 'sparse-matrices',
      stacks: 'stacks',
      queues: 'queues',
      recursion: 'recursion',
      'binary-search': 'binary-search',
      'bubble-sort': 'bubble-sort',
      'selection-sort': 'selection-sort',
      'insertion-sort': 'insertion-sort',
      'shell-sort': 'shell-sort',
      'quick-sort': 'quick-sort',
      'merge-sort': 'merge-sort',
      'heap-sort': 'heap-sort',
      'heap-sort-bottom-up': 'heap-sort-bottom-up',
      'heap-sort-top-down': 'heap-sort-top-down',
    };

    const dataKey = topicDataMap[topicSlug];
    if (!dataKey) {
      setLoading(false);
      return;
    }

    // Import the topic data dynamically
    import(`../data/unit${unitId ? parseInt(unitId) : 1}/${dataKey}.json`)
      .then((module) => {
        setTopic(module.default);
      })
      .catch((error) => {
        console.error('Error loading topic:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [unitId, topicSlug]);

  if (loading) {
    return (
      <div className="loading-page">
        <h1>Loading Topic...</h1>
        <p>Please wait while the topic data loads.</p>
      </div>
    );
  }

  if (!topic) {
    return <div className="not-found">Topic not found</div>;
  }

  return (
    <div className="topic-page">
      <div className="page-header">
        <h1>{topic.title}</h1>
        <div className="breadcrumbs">
          <a href="/units">Units</a> {topic.title}
        </div>
      </div>

      <div className="topic-content">
        <section>
          <h2>1. Definition</h2>
          <p>{topic.definition}</p>
        </section>

        <section>
          <h2>2. Concept Explanation</h2>
          <p>{topic.conceptExplanation}</p>
        </section>

        <section>
          <h2>3. Key Points</h2>
          <ul>
            {topic.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>4. Important Terminology</h2>
          <p>{topic.importantTerminology}</p>
        </section>

        <section>
          <h2>5. Working / Principle</h2>
          <p>{topic.workingPrinciple}</p>
        </section>

        <section>
          <h2>6. Real-Life Example</h2>
          <p>{topic.realLifeExample}</p>
        </section>

        <section>
          <h2>7. DSA Example</h2>
          <p>{topic.dsaExample}</p>
        </section>

        <section>
          <h2>8. Diagram / Visualization</h2>
          <p>{topic.diagram}</p>
        </section>

        <section>
          <h2>9. Algorithm</h2>
          <pre>{topic.algorithm}</pre>
        </section>

        <section>
          <h2>10. Pseudocode</h2>
          <pre>{topic.pseudocode}</pre>
        </section>

        <section>
          <h2>11. JavaScript Code</h2>
          <pre>{topic.jsCode}</pre>
        </section>

        <section>
          <h2>12. Complexity</h2>
          <p>{topic.complexity}</p>
        </section>

        <section>
          <h2>13. Applications</h2>
          <p>{topic.applications}</p>
        </section>

        <section>
          <h2>14. Advantages</h2>
          <p>{topic.advantages}</p>
        </section>

        <section>
          <h2>15. Limitations</h2>
          <p>{topic.limitations}</p>
        </section>

        <section>
          <h2>16. Common Mistakes</h2>
          <p>{topic.commonMistakes}</p>
        </section>

        <section>
          <h2>17. Important Exam Points</h2>
          <p>{topic.importantExamPoints}</p>
        </section>

        <section>
          <h2>18. 2-Mark Questions</h2>
          <ul>
            {topic.twoMarkQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>19. 5-Mark Theory Questions</h2>
          <ul>
            {topic.fiveMarkQuestions.map((q, index) => (
              <li key={index}>
                <strong>Q:</strong> {q.question}
                <br />
                <p>{q.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>20. 10-Mark Theory Questions</h2>
          <ul>
            {topic.tenMarkQuestions.map((q, index) => (
              <li key={index}>
                <strong>Q:</strong> {q.question}
                <br />
                <p>{q.answer}</p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>21. MCQs</h2>
          <ul>
            {topic.mcqs.map((mcq, index) => (
              <li key={index}>
                <strong>Q:</strong> {mcq.question}
                <br />
                <ol>
                  {mcq.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ol>
                <p>
                  <strong>Answer:</strong> {mcq.answer}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>22. Practice Questions</h2>
          <ul>
            {topic.practiceQuestions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TopicPage;
