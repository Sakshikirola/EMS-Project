const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@company.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design login UI",
        description: "Create a clean and modern login page UI",
        date: "2024-02-20",
        category: "design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Landing page hero",
        description: "Design hero section",
        date: "2024-02-22",
        category: "design"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Create dashboard cards",
        description: "Design task cards",
        date: "2024-02-21",
        category: "design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Responsive layout",
        description: "Mobile responsiveness",
        date: "2024-02-14",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Navbar animation",
        description: "Add hover effects",
        date: "2024-02-18",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Form validation",
        description: "Validation bug",
        date: "2024-02-12",
        category: "frontend"
      }
    ]
  },

  {
    id: 3,
    firstName: "Neha",
    email: "employee3@company.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newTask: 2,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write API docs",
        description: "Document backend APIs",
        date: "2024-02-23",
        category: "documentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Swagger setup",
        description: "Add swagger",
        date: "2024-02-24",
        category: "backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Setup database",
        description: "MongoDB config",
        date: "2024-02-13",
        category: "backend"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@company.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Testing components",
        description: "Unit tests",
        date: "2024-02-24",
        category: "testing"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Optimize images",
        description: "Performance boost",
        date: "2024-02-25",
        category: "performance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix CSS bugs",
        description: "Spacing issues",
        date: "2024-02-16",
        category: "frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Footer redesign",
        description: "Improve footer",
        date: "2024-02-17",
        category: "design"
      }
    ]
  },

  {
    id: 5,
    firstName: "Karan",
    email: "employee5@company.com",
    password: "123",
    taskNumbers: {
      active: 0,
      newTask: 1,
      completed: 1,
      failed: 2
    },
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create task API",
        description: "CRUD APIs",
        date: "2024-02-26",
        category: "backend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Deploy frontend",
        description: "Netlify deploy",
        date: "2024-02-18",
        category: "deployment"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Server optimization",
        description: "Improve response time",
        date: "2024-02-14",
        category: "backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Cache issue",
        description: "Redis bug",
        date: "2024-02-19",
        category: "backend"
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Suresh",
    email: "admin@company.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
  localStorage.setItem('employees', JSON.stringify(employees)); 
  localStorage.setItem('admin',JSON.stringify(admin));
}  
export const getLocalStorage = () =>{
  const employees = JSON.parse(localStorage.getItem('employees')) || [];
  const admin = JSON.parse(localStorage.getItem('admin')) || null;

  return {employees,admin}; 
}