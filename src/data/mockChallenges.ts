import { Challenge } from "@/types/challenge";

export const mockChallenges: Challenge[] = [
  {
    id: "1",
    title: "Find the Bug in Array Filter",
    language: "JavaScript",
    difficulty: "Easy",
    codeSnippet: `function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 = 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers));`,
    correctAnswer: "Line 2: Should use === instead of =",
    description: "Identify the syntax error in the filter function"
  },
  {
    id: "2",
    title: "Fix the Async Function",
    language: "TypeScript",
    difficulty: "Medium",
    codeSnippet: `async function fetchUserData(userId: string) {
  const response = fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data;
}`,
    correctAnswer: "Line 2: Missing await before fetch()",
    description: "Find the missing await keyword"
  },
  {
    id: "3",
    title: "Closure Scope Issue",
    language: "JavaScript",
    difficulty: "Hard",
    codeSnippet: `function createCounters() {
  const counters = [];
  for (var i = 0; i < 3; i++) {
    counters.push(function() {
      return i;
    });
  }
  return counters;
}

const myCounters = createCounters();
console.log(myCounters[0]()); // Expected: 0, Actual: ?`,
    correctAnswer: "Line 3: Change var to let or use IIFE",
    description: "Fix the closure variable scope problem"
  },
  {
    id: "4",
    title: "Python List Comprehension",
    language: "Python",
    difficulty: "Easy",
    codeSnippet: `numbers = [1, 2, 3, 4, 5]
squares = [x * x for x in numbers if x > 2]
print(squares)`,
    correctAnswer: "[9, 16, 25]",
    description: "What will be printed?"
  },
  {
    id: "5",
    title: "React State Update Bug",
    language: "TypeScript",
    difficulty: "Medium",
    codeSnippet: `function Counter() {
  const [count, setCount] = useState(0);
  
  const increment = () => {
    setCount(count + 1);
    setCount(count + 1);
  };
  
  return <button onClick={increment}>{count}</button>;
}`,
    correctAnswer: "Line 5-6: Use setCount(prev => prev + 1) for both",
    description: "Fix the state batching issue"
  }
];
