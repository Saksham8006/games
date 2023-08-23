import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const TableQuery = () => {
  const [queries, setQueries] = useState([]);
  const [change, setChange] = useState(false);
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {

    fetch("http://localhost:5000/api/queries/read")
      .then((result) => {
        result.json().then((resp) => {
          console.log("result", resp)
          setQueries(resp.queries)
          console.log(resp.queries)
        })
      })


  }, [change])

  function handleModal(id) {
    console.log(id);
    setShowModal(!showModal);
    localStorage.setItem("deletionId", id);
  }

  function handleView(id) {
    console.log(id);
    setShowModal(!showModal);
    localStorage.setItem("viewId", id);
  }

  function handleDelete() {

    // Make the fetch request to delete the document
    fetch(`http://localhost:5000/queries/delete/${localStorage.getItem("deletionId")}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        setShowModal(!showModal);
        setChange(true)

        console.log('Document deleted successfully');
        toast.error('Deleted Successfully!');
      })
      .catch(error => {
        console.error('Error deleting document:', error);
      });
  }



  // function calculateAverage(field1, field2, field3, field4) {
  //   const intField1 = parseInt(field1, 10);
  //   const intField2 = parseInt(field2, 10);
  //   const intField3 = parseInt(field3, 10);
  //   const intField4 = parseInt(field4, 10);

  //   const sum = intField1 + intField2 + intField3 + intField4;
  //   const average = sum / 4;
  //   return average;
  // }


  return (
    <>
      {showModal ?
        <div id="deleteModal" tabindex="-1" aria-hidden="true" className="flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50  w-full md:inset-0 h-modal md:h-full">
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative p-4 text-center bg-white rounded-lg shadow-lg dark:bg-gray-800 sm:p-5">
              <button onClick={() => setShowModal(!showModal)} className="text-gray-400 absolute top-2.5 right-2.5  hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
              <div className="flex justify-center items-center space-x-4">
                <button onClick={() => setShowModal(!showModal)} data-modal-toggle="deleteModal" type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  No, cancel
                </button>

               

                <button onClick={() => handleDelete()} className="py-2 btn-danger px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 ">
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
        : null

      }
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">


        <div className="flex flex-col">
          <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
            <div className="p-2.5 xl:p-5 min-w-[150px]">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                User Email
              </h5>
            </div>
            <div className="p-2.5 text-left xl:p-5 min-w-[290px]">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Query
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5 min-w-[60px]">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Name
              </h5>
            </div>
            <div className="hidden p-2.5 text-left sm:block xl:p-5 min-w-[190px]">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Phone Number
              </h5>
            </div>
            <Toaster />
            <div className="hidden p-2.5 text-left sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Actions
              </h5>
            </div>
          </div>


          {queries.map((query) => (


            <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-5">
              <div className="flex items-center justify-start gap-3 p-2.5 xl:p-5">


                <p className="hidden text-black dark:text-white sm:block min-w-[150px]">{query.email}</p>
              </div>

              <div className="flex items-center justify-start p-2.5 xl:p-5 min-w-[290px]">
                <p className="text-black dark:text-white">{query.message.substr(0, 30) + "..."}</p>
              </div>

              <div className="flex items-center justify-center p-2.5 xl:p-5 min-w-[60px]">
                <p className="text-black dark:text-white">{query.name.substr(0, 30) + "..."}</p>

              </div>

              <div className="hidden items-center justify-start p-2.5 sm:flex xl:p-5 min-w-[190px]">
                <p className="text-black dark:text-white">{query.phone}</p>
              </div>

              <div className="hidden items-center justify-start p-2.5 sm:flex xl:p-5">
                <div className="flex items-center space-x-3.5">
                  <NavLink to="/editContact">
                    <button onClick={() => handleView(query._id)}
                      className="text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </NavLink>
                  <button onClick={() => handleModal(query._id)}
                    className="text-[#eb4034]">
                    <svg
                      className="fill-current"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.8625 12.2066 16.2563 11.7285 16.2563Z"
                        fill=""
                      />
                      <path
                        d="M9.00039 9.11255C8.66289 9.11255 8.35352 9.3938 8.35352 9.75942V13.3313C8.35352 13.6688 8.63477 13.9782 9.00039 13.9782C9.33789 13.9782 9.64727 13.6969 9.64727 13.3313V9.75942C9.64727 9.3938 9.33789 9.11255 9.00039 9.11255Z"
                        fill=""
                      />
                      <path
                        d="M11.2502 9.67504C10.8846 9.64692 10.6033 9.90004 10.5752 10.2657L10.4064 12.7407C10.3783 13.0782 10.6314 13.3875 10.9971 13.4157C11.0252 13.4157 11.0252 13.4157 11.0533 13.4157C11.3908 13.4157 11.6721 13.1625 11.6721 12.825L11.8408 10.35C11.8408 9.98442 11.5877 9.70317 11.2502 9.67504Z"
                        fill=""
                      />
                      <path
                        d="M6.72245 9.67504C6.38495 9.70317 6.1037 10.0125 6.13182 10.35L6.3287 12.825C6.35683 13.1625 6.63808 13.4157 6.94745 13.4157C6.97558 13.4157 6.97558 13.4157 7.0037 13.4157C7.3412 13.3875 7.62245 13.0782 7.59433 12.7407L7.39745 10.2657C7.39745 9.90004 7.08808 9.64692 6.72245 9.67504Z"
                        fill=""
                      />
                    </svg>
                  </button>

                </div>
              </div>
            </div>))

          }


        </div>

      </div>
    </>

  );
};

export default TableQuery;
