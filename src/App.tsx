import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { formatDate } from '@/helpers/helpers'
import { ITask, ITaskFinished } from './interfaces/ITask';
// import './App.css'
import styles from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ITaskFinished[]>([]);
  const [isCounting, setIsCounting] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const now =  new Date();

  const startTask = () => {
    setIsCounting(prev => !prev);
    const newTask: ITask = {
      id: 123,
      title: "New task",
      project: "New Project",
      startedAt: now,
      isStarted: true
    }
    // const newTasksArr = [...tasks, newTask ];
    setCurrentTask(newTask);
    
    
  }

  const stopTask = () => {
    setIsCounting(prev => !prev);
    if (currentTask) {
      const finishedTask: ITaskFinished = {...currentTask, finishedAt: new Date()}
      const newTasksArr = [...tasks, finishedTask ];
      setTasks(newTasksArr);
    }   
    setCurrentTask(null);
  }


  return (
    <div className={styles.main}>
      <aside className={styles.sidebar}>
        <div className={styles.center}>
          Today: {formatDate(now)}
        </div>
        <div>
          <button onClick={isCounting ? stopTask : startTask}>{isCounting ? "Stop" : "Start"}</button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            <li><a href="#">Time</a></li>
            <li><a href="#">Reports</a></li>
          </ul>
        </nav>
      </aside>

      <main className={styles.tasks}>
        {tasks.map((t, i) => (
          <div className={styles.task} key={i}>
            <div className={styles.info}>
              <h2>{t.title}</h2>
              <p>{t.project}</p>
              
            </div>
            <div><p>Startted at: {t.startedAt.toLocaleTimeString()}</p>
              <p>Ended at: {t.finishedAt.toLocaleTimeString()}</p>
              <p>Duration: {Math.ceil((t.finishedAt.getTime()-t.startedAt.getTime())/60000)} min</p></div>
            <div className={styles.actions}>
              <button onClick={startTask}>Start</button>
            </div>
          </div>
        ))}
        {currentTask && <div className={styles.task}>
            <div className={styles.info}>
              <h2>{currentTask.title} (current)</h2>
              <p>{currentTask.project}</p>
              <p>Startted at: {currentTask.startedAt.toLocaleTimeString('ru-RU')}</p>
            </div>
              <div className={styles.actions}>
              <button onClick={stopTask}>Stop</button>
            </div>
          </div>
          }
      </main>

      

      
    </div>
  );
}

export default App
