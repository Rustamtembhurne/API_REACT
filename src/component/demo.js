// React provides a number of built-in hooks that you can use in your functional components. Here are some of the most commonly used hooks along with their purposes:

// useState: Used for managing component state.
// const [state, setState] = useState(initialState);

// useEffect: Used for managing side effects and mimicking lifecycle methods.

// useEffect(() => {
//   // Effect logic here
// }, [dependencies]);
// useContext: Used for accessing the context API within functional components.

// const value = useContext(MyContext);
// useReducer: A more advanced alternative to useState for managing complex state logic.

// const [state, dispatch] = useReducer(reducer, initialArg, init);
// useRef: Used for creating mutable ref objects that persist across renders.

// const myRef = useRef(initialValue);
// useMemo: Used for memoizing expensive calculations and preventing unnecessary re-renders.

// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
// useCallback: Used for memoizing callback functions to prevent re-creation on each render.

// const memoizedCallback = useCallback(() => {
//   // Callback logic here
// }, [dependencies]);
// useLayoutEffect: Similar to useEffect, but fires synchronously after all DOM mutations.

// useLayoutEffect(() => {
//   // Layout effect logic here
// }, [dependencies]);
// useEffect (with Cleanup): You can use the standard useEffect hook with a cleanup function to manage clean-up logic when the component unmounts.

// useEffect(() => {
//   // Effect logic here

//   return () => {
//     // Cleanup logic here
//   };
// }, [dependencies]);
// useHistory and useParams: Hooks provided by React Router for managing routing in your application.

// const history = useHistory();
// const { id } = useParams();
// These are some of the most commonly used hooks in React. You can use these hooks to manage state, effects, context, and more in your functional components, making your React code more concise and readable.
