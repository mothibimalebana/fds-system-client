const TestTailwind = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary">Tailwind Test</h1>
      <p className="text-muted mt-2">This text should be using the muted color from our custom theme.</p>
      <button className="mt-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Test Button</button>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-light p-4 rounded-lg shadow">Card 1</div>
        <div className="bg-light p-4 rounded-lg shadow">Card 2</div>
        <div className="bg-light p-4 rounded-lg shadow">Card 3</div>
      </div>
    </div>
  )
}

export default TestTailwind
