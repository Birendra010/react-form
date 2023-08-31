

import './App.css'

// import SchemabasedFrom from './components/SchemabasedForm'
import ExpenseForm from './expense-tracker/components/ExpenseForm'
import ExpenseFilter from './expense-tracker/components/ExpenseFilter'
import ExpenseList from './expense-tracker/components/ExpenseList'
import { useState } from 'react'
import FormWithHooks from './components/FormWithHooks';
// import Form from './components/Form'

function App() {

  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" }
  ]);
  const visibleExpenses = selectedCategory?expenses.filter((e)=>e.category === selectedCategory):expenses




  return (
 <div>
    <FormWithHooks/>
      {/* <Form/> */}
      {/* <h1>Regitation Form</h1> */}
      {/* <SchemabasedFrom /> */}
      <div className='mt-4'>
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, { ...expense, id:Math.random() }])} />
      </div>
      <div className='mt-5'>
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
     </div>
      <div className='mt-5'>
        <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />

      </div>  
      
     
      
    </div>
    
    
  )
}

export default App
