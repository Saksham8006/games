import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import baseUrl from "../../Config";
import toast, { Toaster } from 'react-hot-toast';


const EditForm = () => {


  const navigate = useNavigate();



  const [review, setReview] = useState({
    _id: '',
    email: '',
    instiName: '',
    rating: '',
    paragraph: '',
  });

  useEffect(() => {
    fetch(`${baseUrl}/api/reviews/read/${localStorage.getItem("viewId")}`)
      .then((result) => {
        if (!result.ok) {
          throw new Error('Failed to fetch review');
        }
        return result.json();
      })
      .then((resp) => {
        setReview(resp);

      })
      .catch((error) => {
        console.error('Error fetching review:', error);
      });
  }, []);

  function updateStudents(id, e) {
    e.preventDefault();
    console.log("req sent");
    fetch(`${baseUrl}/updateReview/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error('Failed to update review');
        }
        return result.json();
      })
      .then((resp) => {
        if (resp.status === "ok") {
          toast.success('Updated Successfully!');
          navigate("/reviews");
        } else if (resp.status === "error") {
    
          toast.error('This is an error!');
        }
        console.log(resp);
      })
      .catch((error) => {
        console.error('Error updating review:', error);
      });
  }


  return (
    <DefaultLayout>
      <Breadcrumb pageName="FormLayout" />
     
      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col justify-center gap-9">

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Review Form
              </h3>
            </div>
            <Toaster />
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full md:w-1/2 ">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Education Rating
                    </label>
                    <input
                      disabled
                      value={review.educationRatings}

                      onChange={(e) => {
                        setReview({ ...review, educationRatings: e.target.value });
                      }}
                      type="text"
                      placeholder="Enter rating count"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                  </div>
                  <div className="w-full md:w-1/2 ">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Location Rating
                    </label>
                    <input
                      disabled
                      value={review.locationRatings}
                      onChange={(e) => {
                        setReview({ ...review, locationRatings: e.target.value });
                      }}
                      type="text"
                      placeholder="Enter rating count"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full md:w-1/2 ">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Faculty Rating
                    </label>
                    <input
                      disabled
                      value={review.facultyRatings}
                      onChange={(e) => {
                        setReview({ ...review, facultyRatings: e.target.value });
                      }}
                      type="text"
                      placeholder="Enter rating count"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full md:w-1/2 ">
                    <label className="mb-2.5 block text-black dark:text-white">
                      Infrastructure Rating
                    </label>
                    <input
                      disabled
                      value={review.infrastructureRatings}
                      onChange={(e) => {
                        setReview({ ...review, infrastructureRatings: e.target.value });
                      }}
                      type="text"
                      placeholder="Enter rating count"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    value={review.email}
                    onChange={(e) => {
                      setReview({ ...review, email: e.target.value });
                    }}
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Institute Name
                  </label>
                  <input
                    value={review.instiName}
                    onChange={(e) => {
                      setReview({ ...review, instiName: e.target.value });
                    }}
                    type="text"
                    placeholder="Enter Institute Name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Review
                  </label>
                  <textarea
                    value={review.paragraph}
                    onChange={(e) => {
                      setReview({ ...review, paragraph: e.target.value });
                    }}
                    rows={6}
                    placeholder="Type review"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  ></textarea>
                </div>

                <button
                  onClick={(e) => updateStudents(review._id, e)}
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Update Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default EditForm;
