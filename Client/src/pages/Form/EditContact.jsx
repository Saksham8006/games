import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import toast, { Toaster } from 'react-hot-toast';
import baseUrl from "../../Config";

const EditContact = () => {

    const notifySuccess = (text) => toast.success(text);
    // const notifyError = (text) => toast.error(text);
    const navigate = useNavigate();


    const [query, setQuery] = useState({
        _id: '',
        email: '',
        name: '',
        phone: '',
        message: '',
    });


    useEffect(() => {
        fetch(`${baseUrl}/api/queries/read/${localStorage.getItem("viewId")}`).
            then((result) => {
                result.json().then((resp) => {
                    setQuery(resp);
                    console.log(resp)
                });
            });

    }, []);

    function updateQueries(id, e) {
        e.preventDefault();
        console.log("req sent")
        fetch(`${baseUrl}/updateQuery/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        }).then((result) => {
            result.json().then((resp) => {
                if (resp.status === "ok") {
                    notifySuccess("query has been updated successfully.")
                    navigate("/queries")
                }
                else if (resp.status === "error") {
                    alert("Something went wrong. Please try again")
                }
                console.log(resp);
            });
        });
    }

    return (
        <DefaultLayout>
            <Breadcrumb pageName="FormLayout" />
            <Toaster
                toastOptions={{
                    className: '',
                    style: {
                        border: '1px solid #0fb800',
                        padding: '16px',
                        color: '##0fb800',
                        background: "#f1ffe8"
                    },
                }}
            />
            <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">

                        </div>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="p-6.5">


                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">

                                    <div className="w-full ">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Phone
                                        </label>
                                        <input

                                            value={query.phone}
                                            onChange={(e) => {
                                                setQuery({ ...query, phone: e.target.value });
                                            }}
                                            type="text"
                                            placeholder="Enter phone number"
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Email <span className="text-meta-1">*</span>
                                    </label>
                                    <input
                                        value={query.email}
                                        onChange={(e) => {
                                            setQuery({ ...query, email: e.target.value });
                                        }}
                                        type="email"
                                        placeholder="Enter email address"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Name
                                    </label>
                                    <input
                                        value={query.name}
                                        onChange={(e) => {
                                            setQuery({ ...query, name: e.target.value });
                                        }}
                                        type="text"
                                        placeholder="Enter your Name"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        query
                                    </label>
                                    <textarea
                                        value={query.message}
                                        onChange={(e) => {
                                            setQuery({ ...query, message: e.target.value });
                                        }}
                                        rows={6}
                                        placeholder="Type query"
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                    ></textarea>
                                </div>

                                <button
                                    onClick={(e) => updateQueries(query._id, e)}
                                    className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                                >
                                    Update query
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default EditContact;
