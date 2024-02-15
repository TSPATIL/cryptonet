import React from 'react'

export default function ResultItem({ result }) {
    const date = new Date(result.dob.date);
    const rdate = new Date(result.registered.date);
    return (
        <div className='ResultItem flex w-full justify-between items-start'>
            <div className="circle bg-gradient-to-tr from-[#ECF87F] to-[#81B622] opacity-25 rounded-full absolute top-44 left-56 p-20 z-0 content-none"></div>
            <div className="circle bg-gradient-to-tr from-[#ECF87F] to-[#81B622] opacity-90 rounded-full absolute top-[500px] right-[170px] p-24 z-20 content-none"></div>
            <div className="rectangle bg-[#ECF87F] rotate-45 w-[100px] h-[100px] absolute top-[700px] left-[-50px]"></div>
            <div className="rectangle bg-gradient-to-b from-[white] to-[#81B622] rotate-45 w-[100px] h-[100px] absolute top-[1250px] right-[50px]"></div>
            <div className="circle bg-gradient-to-tr from-[#c5d343] to-[#71ac04] rounded-full absolute opacity-50 p-20 top-[1050px] left-[170px]"></div>
            
            <div className='w-full h-full'>
                <div className="flex text-2xl font-semibold text-[gold] justify-end mr-5">
                    User-id: &nbsp; <span className='text-white hover:underline cursor-pointer'>{result.login.uuid}</span>
                </div>
                <div className="personal w-full h-fit p-4">
                <div className="top-left-corner relative top-[-7px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="top-right-corner relative left-[980px] top-[-7px]">
                        <div className="vertical absolute py-12 px-3 left-[72px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-left-corner relative bottom-[-490px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-right-corner relative left-[980px] bottom-[-490px] z-10">
                        <div className="vertical absolute py-12 px-3 left-[72px] top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="border-8 border-[silver] border-double text-lime-950 font-bold p-4 py-10 z-40">
                        <h2 className='text-4xl ml-10 mb-3'>Personal Details:</h2>
                        <div className=' flex'>
                            <img src={result.picture.large} alt='profile' className='border-4 border-solid rounded-2xl border-[gold] w-1/4 h-80 mx-10 mt-5' />
                            <div className='w-full'>
                                <div className='text-yellow-900 text-3xl my-5'>Name: <span className='hover:underline text-lime-800'>{result.name.title}. {result.name.first} {result.name.last}</span></div>
                                <div className='text-yellow-900 text-3xl my-5'>Username: <span className='hover:underline text-lime-800'>{result.login.username}</span></div>
                                <div className='text-yellow-900 text-3xl my-5'>Gender: <span className='hover:underline text-lime-800'>{result.gender}</span></div>
                                <div className="flex items-center justify-between my-5">
                                    <div className='text-yellow-900 text-3xl'>Email: <span className='hover:underline text-lime-800'>{result.email}</span></div>
                                </div>
                                <div className='text-yellow-900 text-3xl'>Phone no.: <span className='hover:underline text-lime-800'>{result.phone}</span></div>
                                <div className="flex items-center justify-between my-5">
                                    <div className='text-yellow-900 text-3xl'>Date of birth: <span className='hover:underline text-lime-800'>{date.toDateString()} ({result.dob.age} years old)</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="location w-full h-fit p-4">
                    <div className="top-left-corner relative top-[-7px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="top-right-corner relative left-[980px] top-[-7px]">
                        <div className="vertical absolute py-12 px-3 left-[72px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-left-corner relative bottom-[-410px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-right-corner relative left-[980px] bottom-[-410px]">
                        <div className="vertical absolute py-12 px-3 left-[72px] top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="border-8 border-#145DA0 border-double text-lime-950 font-bold p-8">
                        <h2 className='text-4xl mb-6'>Location Details:</h2>
                        <div className='text-yellow-900 text-3xl my-5'>Address: <span className='text-lime-800 hover:underline'>{result.location.street.number}, {result.location.street.name}, {result.location.city} </span></div>
                        <div className='text-yellow-900 text-3xl my-5'>Postal Code: <span className='text-lime-800 hover:underline'>{result.location.postcode}</span></div>
                        <div className="flex items-center justify-between my-5">
                            <div className='text-yellow-900 text-3xl'>State: <span className='text-lime-800 hover:underline'>{result.location.state}</span></div>
                            <div className='text-yellow-900 text-3xl w-1/3'>Country: <span className='text-lime-800 hover:underline'>{result.location.country}</span></div>
                        </div>
                        <div className="flex items-center justify-between my-5">
                            <div className='text-yellow-900 text-3xl'>Co-ordinates: <span className='text-lime-800 hover:underline'>{result.location.coordinates.latitude} Lat, {result.location.coordinates.longitude} Long</span></div>
                        </div>
                        <div className="flex items-center justify-between my-5">
                            <div className='text-yellow-900 text-3xl'>Timezone: <span className='text-lime-800 hover:underline'>{result.location.timezone.offset}, {result.location.timezone.description}</span></div>
                        </div>
                    </div>
                </div>
                <div className="official w-full h-fit p-4">
                    <div className="top-right-corner relative left-[980px] top-[-7px]">
                        <div className="vertical absolute py-12 px-3 left-[72px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="top-left-corner relative top-[-7px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-right-corner relative left-[980px] top-[350px]">
                        <div className="vertical absolute py-12 px-3 left-[72px] top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="bottom-left-corner relative bottom-[-350px] left-[-7px]">
                        <div className="vertical absolute py-12 px-3 top-[-80px] bg-[#3D550C] content-none"></div>
                        <div className="horizontal absolute py-3 px-12 bg-[#3D550C] content-none"></div>
                    </div>
                    <div className="border-8 border-#145DA0 text-lime-950 border-double font-bold p-8">
                        <h2 className='text-4xl mb-6'>Official Details:</h2>
                        <div className='text-yellow-900 text-3xl my-5'>Id: <span className='text-lime-800 hover:underline'>{result.id.name}, {result.id.value} </span></div>
                        <div className='text-yellow-900 text-3xl my-5'>Cell Phone.: <span className='text-lime-800 hover:underline'>{result.cell}</span></div>
                        <div className="flex items-center justify-between my-5">
                            <div className='text-yellow-900 text-3xl'>Registration: <span className='text-lime-800 hover:underline'>{rdate.toDateString()} ({result.registered.age} years ago)</span></div>
                        </div>
                        <div className="flex items-center justify-between my-5">
                            <div className='text-yellow-900 text-3xl'>NAT: <span className='text-lime-800 hover:underline'>{result.nat}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
