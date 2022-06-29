import Swal from 'sweetalert2';
import generateBoardButtons from './domFunctions';

async function addNewBoardAction(){
    const {value:inputValue}  = await  Swal.fire({
        title: 'Enter Board Name',
        input: 'text',
        inputLabel: 'Enter a name for new Kanban Board',
        showCancelButton: true,
        backdrop:true,
        background:'#292631',
        inputValidator: (value) => {
          if (!value) {
            return 'Board name can not be blank!'
          }
        }
      });
    
      if(inputValue){
        let newBoard = new Board (inputValue, idGenerator);
        data.push(newBoard);
        generateBoardButtons(boards, data);
      }
}

export { addNewBoardAction}