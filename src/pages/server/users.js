import React from 'react';

const UserPage = (props) => {
   
    return (
        <div>
            <h1 className="pb-2">this is server site ..users.....</h1><hr />
            <ol>
                    {
                        props.data.map(data => <li key={data.id} className="mt-3 mx-6">{data.name}</li>)
                    }
            </ol>

        </div>
    );
};
export const getServerSideProps = async()=>{
    const data = await(await fetch("https://jsonplaceholder.typicode.com/users")).json();
    return{
        props : {
            data,
        }
    }
}

export default UserPage;