import React, {Component} from 'react';


class AlumniWorked extends Component {
    render() {

        // let array = ["samsung", "apple", "imb", "microsoft", "grab","uber"];
        // let images = array.map(image => {
        //    return <div className="company-logo" key={image}><img src={(`../static/${image}.png`)} alt="" /></div>
        // });

        return (
       
        <div className="alumni-content">
            <div className="alumni-content-text">
                <h2>Our Alumni worked with</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="alumni-companies">

               <div className="company-logo" >
                    <img src={(`/static/samsung.png`)} alt="" />
                  </div>

                  <div className="company-logo" >
                    <img src={(`/static/apple.png`)} alt="" />
                  </div>

                  <div className="company-logo" >
                    <img src={(`/static/imb.png`)} alt="" />
                  </div>

                  <div className="company-logo" >
                    <img src={(`/static/microsoft.png`)} alt="" />
                  </div>


                  <div className="company-logo" >
                    <img src={(`/static/grab.png`)} alt="" />
                  </div>

                  <div className="company-logo" >
                    <img src={(`/static/uber.png`)} alt="" />
                  </div>
            </div>

            <style jsx>{`
             h2 {
                font-size: 20px;
            }
            
             .alumni-content {
                color: white;
                font-size: 15px;
                color: #EAEAEA;
                line-height: 22px;
            }
            .alumni-content {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
            }
            
            .alumni-content-text {
                padding: 0 54px;
                width: 50%;
            }
            
            .alumni-companies {
                width: 50%;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: horizontal;
                -webkit-box-direction: normal;
                    -ms-flex-direction: row;
                        flex-direction: row;
                -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                -webkit-box-pack: end;
                    -ms-flex-pack: end;
                        justify-content: flex-end;
                -webkit-box-align: center;
                    -ms-flex-align: center;
                        align-items: center;
                -ms-flex-line-pack: center;
                    align-content: center;
            }
            div .company-logo {
                margin: 25px;
                margin-top: 0;
                padding: 3px;
                width: 8em;
                text-align: center;
                padding-top: 0;
            }
            `}</style>
        </div>
        );
    }
}
export default AlumniWorked;