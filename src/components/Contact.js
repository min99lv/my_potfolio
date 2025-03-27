import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // 입력 값이 바뀔 때마다 formDate 업데이트
    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 제출 버튼 누를 때 실행
    const handleSubmit = async (e) => {
        e.preventDefault();
        //alert(`문의가 접수되었습니다.\n\n이름: ${formData.name}\n이메일: ${formData.email}\n내용: ${formData.message}`);
        // 또는 console.log(formData);
        // setFormData({name:"",email:"",message:""});

        setIsSubmitting(true);

        try{
            const response = await fetch("http://localhost:8080/contact",{
                method: "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            } );

            if(response.ok) {
                alert("문의가 성공적으로 전송되었습니다!");
                setFormData({name:"", email:"",message:""});
            } else {
                alert("전송 중 오류가 발생했습니다.");
            }
        } catch (error) {
            alert("서버에 연결 할 수 없습니다.")
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" style={{padding:"20px"}}>
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


                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "전송 중..." : "제출하기"}</button>
            </form>


        </section>
    );
}

export default Contact;