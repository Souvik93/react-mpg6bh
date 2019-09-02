import React, { Component } from 'react';
class FilterScreen extends Component {
   render() {
       return (

           <div className={'panel panel-default'} >
               <div className="panel-heading">Filters</div>
               <div className="panel-body">
                   <div className={'list-group-item'}>
                       <div className={'row'}>
                           <p> Priority</p>
                           <select id={'PriSelector'} onChange={()=>this.props.onPriorityFilterChange(document.getElementById('PriSelector').value)}>
                               <option value={'All'} defaultValue={(""===this.props.selectedPriority)}>All</option>
                               <option value={'High'} defaultValue={("High"===this.props.selectedPriority)}>High</option>
                               <option value={'Medium'} defaultValue={("Medium"===this.props.selectedPriority)}>Medium</option>
                               <option value={'Low'} defaultValue={("Low"===this.props.selectedPriority)}>Low</option>
                           </select>
                       </div>
                   </div>
                   <div className={'list-group-item'}>
                       <p>Tasks Search</p>
                       <input type="text" id={'txtSearch'}
                              className="form-control form-control-lg"
                              placeholder="Search"
                              value={this.props.searchText}
                              onChange={()=>{
                              this.props.onSearchTextChange(document.getElementById('txtSearch').value)
                              }}/>
                   </div>
               </div>
           </div>

       );
   }
}

export default FilterScreen;