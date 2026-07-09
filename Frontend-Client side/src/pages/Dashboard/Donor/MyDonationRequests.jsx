import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";

const MyDonationRequests = () => {

  const navigate = useNavigate();

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;


  const getUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user"));
    } catch {
      return null;
    }
  };


  const fetchRequests = async () => {

    try {

      const user = getUser();

      if (!user?.email) {
        setLoading(false);
        return;
      }


      setLoading(true);


      const res = await fetch(
        `http://localhost:5000/api/donation-requests?email=${user.email}`
      );


      const data = await res.json();


      console.log("REQUEST DATA =", data);


      setRequests(Array.isArray(data) ? data : []);


    } catch(error){

      console.log(error);
      alert("Failed to load requests");

    } finally {

      setLoading(false);

    }

  };


  useEffect(()=>{

    fetchRequests();

  },[]);



  // FILTER

  const filteredRequests = useMemo(()=>{

    if(statusFilter==="all"){
      return requests;
    }

    return requests.filter(
      (item)=> item.status === statusFilter
    );

  },[requests,statusFilter]);



  // PAGINATION

  const totalPages = Math.ceil(
    filteredRequests.length / itemsPerPage
  );


  const paginatedRequests = filteredRequests.slice(
    (currentPage-1)*itemsPerPage,
    currentPage*itemsPerPage
  );





  // STATUS UPDATE

  const handleStatus = async(id,status)=>{

    try{

      const res = await fetch(
        `http://localhost:5000/api/donation-requests/${id}`,
        {
          method:"PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            status
          })
        }
      );


      if(res.ok){

        alert("Status Updated");
        fetchRequests();

      }


    }catch(error){

      console.log(error);

    }

  };




  // DELETE

  const handleDelete = async(id)=>{

    const confirmDelete = window.confirm(
      "Are you sure?"
    );


    if(!confirmDelete) return;


    try{

      const res = await fetch(
        `http://localhost:5000/api/donation-requests/${id}`,
        {
          method:"DELETE"
        }
      );


      if(res.ok){

        alert("Deleted Successfully");
        fetchRequests();

      }


    }catch(error){

      console.log(error);

    }

  };





  if(loading){

    return (
      <div className="text-center mt-10">
        Loading...
      </div>
    )

  }




  return (

    <div className="p-6">


      <div className="flex justify-between mb-6">

        <h2 className="text-3xl font-bold">
          My Donation Requests
        </h2>



        <select
          className="select select-bordered"
          value={statusFilter}
          onChange={(e)=>{
            setStatusFilter(e.target.value);
            setCurrentPage(1);
          }}
        >

          <option value="all">
            All
          </option>

          <option value="pending">
            Pending
          </option>

          <option value="inprogress">
            In Progress
          </option>

          <option value="done">
            Done
          </option>

          <option value="canceled">
            Canceled
          </option>

        </select>


      </div>





      {
        paginatedRequests.length===0 ?

        <h2 className="text-center">
          No Donation Requests Found
        </h2>


        :


        <div className="overflow-x-auto bg-white rounded-lg shadow">


        <table className="table w-full">


        <thead className="bg-red-600 text-white">

        <tr>

        <th>#</th>
        <th>Recipient</th>
        <th>Location</th>
        <th>Blood</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
        <th>Actions</th>

        </tr>

        </thead>




        <tbody>


        {
          paginatedRequests.map((req,index)=>(


          <tr key={req._id}>


          <td>
            {index+1}
          </td>


          <td>
            {req.recipient_name}
          </td>



          <td>

          {req.recipient_district}

          <br/>

          {req.recipient_upazila}

          </td>



          <td>

          <span className="badge badge-error text-white">

          {req.blood_group}

          </span>

          </td>



          <td>
            {req.donation_date}
          </td>


          <td>
            {req.donation_time}
          </td>



          <td>

          {req.status}


          </td>



          <td className="space-x-1">


          {/* VIEW */}

          <button

          className="btn btn-xs btn-primary"

          onClick={()=>
            navigate(`/dashboard/donation-requests/${req._id}`
            )
          }

          >

          View

          </button>




          {/* EDIT */}

          {
            req.status==="pending" &&

            <button

            className="btn btn-xs btn-info"

            onClick={()=>
              navigate(
                `/dashboard/edit-donation-request/${req._id}`
              )
            }

            >

            Edit

            </button>

          }





          {/* DELETE */}

          {
            req.status==="pending" &&

            <button

            className="btn btn-xs btn-error"

            onClick={()=>
              handleDelete(req._id)
            }

            >

            Delete

            </button>

          }





          {
            req.status==="inprogress" &&

            <>


            <button

            className="btn btn-xs btn-success"

            onClick={()=>
              handleStatus(
                req._id,
                "done"
              )
            }

            >

            Done

            </button>



            <button

            className="btn btn-xs btn-warning"

            onClick={()=>
              handleStatus(
                req._id,
                "canceled"
              )
            }

            >

            Cancel

            </button>


            </>


          }



          </td>


          </tr>


          ))
        }



        </tbody>



        </table>





        {/* PAGINATION */}

        {
          totalPages > 1 &&

          <div className="flex justify-center gap-3 p-4">


          {
            [...Array(totalPages)].map((_,i)=>(

              <button

              key={i}

              className={
                currentPage===i+1
                ?
                "btn btn-sm btn-error"
                :
                "btn btn-sm"
              }

              onClick={()=>setCurrentPage(i+1)}

              >

              {i+1}

              </button>


            ))
          }


          </div>

        }



        </div>


      }



    </div>


  );

};


export default MyDonationRequests;