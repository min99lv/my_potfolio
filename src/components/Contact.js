import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    // 입력 값이 바뀔 때마다 formDate 업데이트
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 제출 버튼 누를 때 실행
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`문의가 접수되었습니다.\n\n이름: ${formData.name}\n이메일: ${formData.email}\n내용: ${formData.message}`);
    // 또는 console.log(formData);
        setFormData({name:"",email:"",message:""});
    };

    return (
        <section>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:"10px"}}>
                    <label>이름:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div style={{marginBottom:"10px"}}>
                    <label>이메일:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div style={{marginBottom:"10px"}}>
                    <label>메시지:</label>
                    <textarea  name="message" value={formData.message} onChange={handleChange} rows="4" required />
                </div>


                <button type="submit">제출하기</button>
            </form>


        </section>
    );
}

export default Contact;