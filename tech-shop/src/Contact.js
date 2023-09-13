import styled from "styled-components";
import { useEffect, useState } from "react";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const [userData, setUserData] = useState({});

 const callContactPage = async()=>{
  try{
      const res =await fetch('/about',{
        method : "GET",
        headers : {
          "Content-Type" : "app;ication/json"
        }
       
      });

      const data = await res.json();
      console.log(data);
      setUserData(data)

      if(!res.status === 200 ){
        const error = new Error(res.error);
        throw error;
      }

  }catch(err){
    console.log(err);
    
  }
 }

    useEffect(()=>{
      callContactPage();
    }, []);


  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>

   

      <div className="container">
        <div className="contact-form">
          <form
           
        
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              value={userData.name}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={userData.email}
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
