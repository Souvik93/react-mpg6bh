import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTask from '../components/addTask';
import FilterScreen from '../components/filterTask';
import ListTask from '../components/listTask';

class Tasky extends Component {
  
   constructor(){
       super();
       this.state={
           currentPage:1,
           taskPerPage:5
       }
   }
   
   saveTask = (newTask) => {};
   deleteTask = (id) => {   };
   editTask = (editedTask) => {   }
   onPriorityFilterChange = (value) => {   };
   onSearchTextChange = (text) => {   };
   render() {
       const { currentPage, taskPerPage } = this.state;
       let taskys = this.props.tasks;
       let taskys = []
       const indexOfLastTodo = currentPage * taskPerPage;
       const indexOfFirstTodo = indexOfLastTodo - taskPerPage;
       const currentTodos = taskys.slice(indexOfFirstTodo, indexOfLastTodo);
       const pageNumbers = [];
       for (let i = 1; i <= Math.ceil(taskys.length / taskPerPage); i++) {
           pageNumbers.push(i);
       }
       return (
           <div className="row content">
               <div className="col-sm-2 sidenav">
                   <FilterScreen onPriorityFilterChange={this.onPriorityFilterChange}
                                 onSearchTextChange={this.onSearchTextChange}
                   />
               </div>
               <div className={'col-sm-8 text-left'}>
                   <AddTask saveTask={this.saveTask}/>
                   <ListTask list={currentTodos}
                             deleteTask={this.deleteTask}
                             editTask={this.editTask}
                   />
                   <ul className="pagination">
                       { pageNumbers.map((i,index)=>{
                           return <li key={index} onClick={()=>{this.setState({currentPage:i})}}>
                               <a>{i}</a>
                           </li>
                       })}
                   </ul>
               </div>
           </div>
       );
   }}
   const mapStateToProps = (state) => ({
   tasks:state.task.task,
});
const mapActionToProps = ({});
export default connect(mapStateToProps, mapActionToProps)(Tasky);

export default (Tasky);