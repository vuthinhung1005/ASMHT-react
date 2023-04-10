import React from 'react'
import "../../../client.css"
import { useForm } from 'react-hook-form'
import { login } from '../../../../src/api/auth'
import { useNavigate } from 'react-router-dom'
type Props = {}

const Logins = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onHandleSubmit = async (data: any) => {
        const { data: user } = await login(data);
        localStorage.setItem('user', JSON.stringify(user))
        setTimeout(() => {
            window.location.href = ('/admin')
        }, 1000);


    }
    return (
        <>
            <div class="container-fluid bg-secondary mb-5">
                <div class="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '300px' }}>
                    <h1 class="font-weight-semi-bold text-uppercase mb-3"> Login</h1>

                </div>
            </div>
            <div className="col-md-4 mb-5" style={{ marginLeft: '34%', textAlign: 'center' }}>
                <h5 className="font-weight-bold text-dark mb-4">login</h5>
                <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <input type="email" className="form-control border-0 py-4" placeholder='Email'{...register("email", { required: true })}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control border-0 py-4" placeholder='Password'{...register("password", { required: true })}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block border-0 py-3" type="submit">Login</button>
                    </div>
                </form>
            </div>
            {/* <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="email" placeholder='Email'{...register("email", { required: true })} />
                <input type="password" placeholder='Password'{...register("password", { required: true })} />
                <button>Login</button>
            </form> */}
        </>
    )

}

export default Logins