
export const Comment = ({comment}) => {

    const {id, name, email, body} = comment;

    return (
        <div>
            <div>Id - {id}</div>
            <div>Name - {name}</div>
            <div>Email - {email}</div>
            <div>Body - {body}</div>
            <hr/>
            <hr/>
        </div>
    );
};

