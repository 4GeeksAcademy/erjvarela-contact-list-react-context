import { Link } from 'react-router-dom';

export const FormContact = (props) => {
    const setValue = (event, setFunction) => {
        setFunction(event.target.value);
      }

    return (
        <div className='container'>
            <div className='row text-center mt-3 font-weight-bold'>
                <h1>{props.title}</h1>
            </div>
            <form>
                <div className='row'>
                    <div className='col-10 mx-auto m-3 p-3'>
                        <div className="form-group">
                            <label htmlFor="fullnameinput">Full Name</label>
                            <input id="fullnameinput" type="text" className="form-control" placeholder="Enter Full name" value={props.fullName} onChange={(event) => setValue(event, props.setFullName)} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto p-3'>
                        <div className="form-group">
                            <label htmlFor="emailinput">Email</label>
                            <input id='emailinput' type="email" className="form-control" placeholder="Enter Email" value={props.email} onChange={(event) => setValue(event, props.setEmail)} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto p-3'>
                        <div className="form-group">
                            <label htmlFor="phoneinput">Phone</label>
                            <input id='phoneinput' type="text" className="form-control" placeholder="Enter Phone" value={props.phone} onChange={(event) => setValue(event, props.setPhone)} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto p-3'>
                        <div className="form-group">
                            <label htmlFor="addressinput">Address</label>
                            <input id='addressinput' type="text" className="form-control" placeholder="Enter Address" value={props.address} onChange={(event) => setValue(event, props.setAddress)} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto p-3'>
                        <Link to="/" className="btn btn-primary w-100" onClick={props.contactAction}>Save</Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-10 mx-auto p-3'>
                        <Link to="/" >or get back to contacts</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default FormContact;