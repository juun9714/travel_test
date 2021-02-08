var MBTI={
    I:0,
    E:0,
    S:0,
    N:0,
    T:0,
    F:0,
    P:0,
    J:0,
    Qnum:1
}

const question_list={
    q1:"Q1. 두가지 응답 중 하나를 골라주세요",
    q2:"Q2. 두가지 응답 중 하나를 골라주세요",
    q3:"Q3. 두가지 응답 중 하나를 골라주세요",
    q4:"Q4. 두가지 응답 중 하나를 골라주세요",
    q5:"Q5. 두가지 응답 중 하나를 골라주세요",
    q6:"Q6. 두가지 응답 중 하나를 골라주세요",
    q7:"Q7. 두가지 응답 중 하나를 골라주세요",
    q8:"Q8. 두가지 응답 중 하나를 골라주세요",
    q9:"Q9. 두가지 응답 중 하나를 골라주세요",
    q10:"Q10. 두가지 응답 중 하나를 골라주세요",
    q11:"Q11. 두가지 응답 중 하나를 골라주세요",
    q12:"Q12. 두가지 응답 중 하나를 골라주세요",
}

const answer_list={
    q1:{
        a1:"Q1의 A1",
        a2:"Q1의 A2"
    },
    q2:{
        a1:"Q2의 A1",
        a2:"Q2의 A2"
    },
    q3:{
        a1:"Q3의 A1",
        a2:"Q3의 A2"
    },
    q4:{
        a1:"Q4의 A1",
        a2:"Q4의 A2"
    },
    q5:{
        a1:"Q5의 A1",
        a2:"Q5의 A2"
    },
    q6:{
        a1:"Q6의 A1",
        a2:"Q6의 A2"
    },
    q7:{
        a1:"Q7의 A1",
        a2:"Q7의 A2"
    },
    q8:{
        a1:"Q8의 A1",
        a2:"Q8의 A2"
    },
    q9:{
        a1:"Q9의 A1",
        a2:"Q9의 A2"
    },
    q10:{
        a1:"Q10의 A1",
        a2:"Q10의 A2"
    },
    q11:{
        a1:"Q11의 A1",
        a2:"Q11의 A2"
    },
    q12:{
        a1:"Q12의 A1",
        a2:"Q12의 A2"
    }
}

const result_list={
    ISTP:{
        //현식
        nickname:"의외성 NO.1 여우",
        location:"호주 시드니",
        pic:"./src/fox.jpg",
        character:"효율적인 게 최고! 행동도 효율적으로, 표현도 효율적으로! 그렇다고 마음마저 효율적인건 아니라니깐! 표현과 마음이 따로 노는 당신은 의외성 NO.1 여우입니다!"
    },
    ENTP:{
        //현식
        nickname:"최고의 변호인 사자",
        location:"바티칸 시티",
        pic:"./src/lion.jpg",
        character:"어떤 상황에서도 자신만의 이유로 최고의 선택을 할 수 있는 당신은 최고의 변호인 사자입니다!"
    },
    ENTJ:{
        //현식
        nickname:"영원한 학생회장 흰수염고래 ",
        location:"오스트리아 빈",
        pic:"./src/whale.jpg",
        character:"이번이 마지막이야… 라고 했지만 어느새 총대를 메고 있는 당신! 어디에서나 밝은 빛으로 사람들을 이끄는 당신은 영원한 학생회장 흰수염고래입니다!"
    },
    ISFJ:{
        //대현
        nickname:"듬직한 코뿔소",
        location:"뉴질랜드 남섬",
        //태국 방콕 or 뉴질랜드 남섬?
        pic:"./src/rhino.jpg",
        character:"누구보다 따듯한 마음씨로 주변 사람들을 보듬어주는 당신은 듬직한 코뿔소입니다! 남들을 챙기느라 정작 자신은 돌보진 못한 당신, 코로나가 끝나고선 여지껏 뒷전이었던 자신의 마음을 치유해줄 수 있는 여행지인 뉴질랜드는 어떠신가요?"
    },
    INFP:{
        //대현
        nickname:"연약한 아기고양이",
        location:"캐나다",
        //홍콩 or 캐나다?
        pic:"./src/kitty.jpg",
        character:"꼬리에 꼬리를 무는 공상의 나래를 펼치기도 하고, 남모를 고민과 걱정도 많은 당신은 연약한 아기고양이입니다! 남들에게 구애받지 않고 조용한 곳에서 상상의 나래를 맘껏 펼쳐볼 수 있는 캐나다는 어떠신가요?"
    },
    INFJ:{
        //대현
        nickname:"물 위의 해달",
        location:"스위스",
        pic:"./src/haedal.jpg",
        character:"주변 사람들에게 신경을 많이 쓰면서도 쉽게 휘둘리지는 않는, 창의성과 통찰력을 바탕으로 차분하게 사고하는 당신은 물 위의 해달입니다! 고요한 자연 속에서 혼자만의 사색을 즐길 수 있는 여행지인 스위스는 어떠신가요?"
    },
    ENFP:{
        //지유
        nickname:"타고난 인싸 쿼카",
        location:"브라질 리우",
        pic:"./src/quaka.jpg",
        character:"당신은 다른 사람들에게 관심이 많은 타고난 인싸 쿼카입니다! "
    },
    ISFP:{
        //지유
        nickname:"순한 양",
        location:"프랑스 파리",
        pic:"./src/sheep.jpg",
        character:"넓은 포용력을 가지고, 현재를 즐기는 순해보이지만 무는 양입니다.  "
    },
    ESFP:{
        //지유
        nickname:"고민없이 들판을 누비는 토끼",
        location:"미국 뉴욕",
        pic:"./src/rabbit.jpg",
        character:"당신은 활동적이고, 사교적인 들판을 누비는 토끼입니다!"
    },
    INTP:{
        //지유
        nickname:"고독한 고양이",
        location:"몽골",
        pic:"./src/cat.jpg",
        character:"고독한 고양이 입니다!"
    },
    ENFJ:{
        //주훈
        nickname:"포옹을 좋아하는 반달가슴곰",
        location:"이탈리아 로마",
        pic:"./src/bear.jpg",
        character:"당신은 인류애 뿜뿜하고, 따뜻한 마음을 가지고 있는 포옹을 좋아하는 반달가슴곰입니다! 많은 사람들의 흔적이 숨쉬는 이탈리아 로마 어떠세요?"
    },
    INTJ:{
        //주훈
        nickname:"공학을 공부하는 방울뱀",
        location:"미국 캘리포니아",
        pic:"./src/snake.jpg",
        character:"당신은 독립심이 강하고, 관심 분야에 몰두하는 목표지향적인 공학을 공부하는 방울뱀입니다! 수많은 관광지를 효율적으로 둘러볼 수 있는 미국 캘리포니아 어떠세요?"
    },
    ESTP:{
        //주훈
        nickname:"이곳 저곳을 둘러보는 치와와",
        location:"러시아 시베리아 횡단열차",
        pic:"./src/chiwawa.jpg",
        character:"당신은 모험심이 뛰어나고, 탁월한 개방성을 바탕으로 탐험하는 것을 즐기는 이곳저곳 둘러보는 치와와입니다. 많은 것들을 구경할 수 있는 러시아 시베리아 횡단열차 여행을 추천합니다."
    },
    ESTJ:{
        //준희
        nickname:"안경 쓴 부엉이 박사",
        location:"그리스 아테네",
        pic:"./src/owl.jpg",
        character:"당신은 여행지에 왔으면 의미있는 유적을 꼭 보고 가야하는 안경 쓴 부엉이 박사입니다 ! 현대사회를 지탱하는 여러 가치들이 기원한 그리스 아테네 어떠세요?"
    },
    ISTJ:{
        //준희
        nickname:"독야청청 독수리 선생님",
        location:"싱가포르",
        pic:"./src/eagle.jpg",
        character:"당신은 다른 사람과 함께 하기보단 자신의 계획대로 여행하는 것을 좋아하는 독야청청 독수리 선생님 입니다. 혼자서도 알찬 여행이 가능한 싱가포르가 어울리네요 !"
    },
    ESFJ:{
        //준희
        nickname:"발빠른 다람쥐",
        location:"말레이시아 코타키나 발루",
        pic:"./src/squr.jpg",
        character:"당신은 유적지, 명소보다는 새로운 사람들과 어울리고 대화하기를 좋아하는 발빠른 다람쥐 입니다.  다양한 사람들과 아름다운 이야기를 하며 다양한 투어를 즐길 수 있는 코타키나발루는 어떠신가요? "
    },
}

function reTry(){
    location.href="main.html"
}

function getMBTI(){
    if(MBTI.I>MBTI.E){
        //I
        if(MBTI.S>MBTI.N){
            //IS
            if(MBTI.F>MBTI.T){
                //ISF
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ISFP.character
                    nick.textContent=result_list.ISFP.nickname
                    character.src=result_list.ISFP.pic
                    alert("ISFP")
                }
                else{
                    result_box.textContent=result_list.ISFJ.character
                    nick.textContent=result_list.ISFJ.nickname
                    character.src=result_list.ISFJ.pic
                    alert("ISFJ")
                }
            }
            else{
                //IST
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ISTP.character
                    nick.textContent=result_list.ISTP.nickname
                    character.src=result_list.ISTP.pic
                    alert("ISTP")
                }
                else{
                    result_box.textContent=result_list.ISTJ.character
                    nick.textContent=result_list.ISTJ.nickname
                    character.src=result_list.ISTJ.pic
                    alert("ISTJ")
                }
            }
        }
        else{
            //IN
            if(MBTI.F>MBTI.T){
                //INF
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.INFP.character
                    nick.textContent=result_list.INFP.nickname
                    character.src=result_list.INFP.pic
                    alert("INFP")
                }
                else{
                    result_box.textContent=result_list.INFJ.character
                    nick.textContent=result_list.INFJ.nickname
                    character.src=result_list.INFJ.pic
                    alert("INFJ")
                }
            }
            else{
                //INT
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.INTP.character
                    nick.textContent=result_list.INTP.nickname
                    character.src=result_list.INTP.pic
                    alert("INTP")
                }
                else{
                    result_box.textContent=result_list.INTJ.character
                    nick.textContent=result_list.INTJ.nickname
                    character.src=result_list.INTJ.pic
                    alert("INTJ")
                }
            }
        }
    }
    else{
        //E
        if(MBTI.S>MBTI.N){
            //ES
            if(MBTI.F>MBTI.T){
                //ESF
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ESFP.character
                    nick.textContent=result_list.ESFP.nickname
                    character.src=result_list.ESFP.pic
                    alert("ESFP")
                }
                else{
                    result_box.textContent=result_list.ESFJ.character
                    nick.textContent=result_list.ESFJ.nickname
                    character.src=result_list.ESFJ.pic
                    alert("ESFJ")
                }
            }
            else{
                //EST
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ESTP.character
                    nick.textContent=result_list.ESTP.nickname
                    character.src=result_list.ESTP.pic
                    alert("ESTP")
                }
                else{
                    result_box.textContent=result_list.ESTJ.character
                    nick.textContent=result_list.ESTJ.nickname
                    character.src=result_list.ESTJ.pic
                    alert("ESTJ")
                }
            }
        }
        else{
            //EN
            if(MBTI.F>MBTI.T){
                //ENF
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ENFP.character
                    nick.textContent=result_list.ENFP.nickname
                    character.src=result_list.ENFP.pic
                    alert("ENFP")
                }
                else{
                    result_box.textContent=result_list.ENFJ.character
                    nick.textContent=result_list.ENFJ.nickname
                    character.src=result_list.ENFJ.pic
                    alert("ENFJ")
                }
            }
            else{
                //ENT
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ENTP.character
                    nick.textContent=result_list.ENTP.nickname
                    character.src=result_list.ENTP.pic
                    alert("ENTP")
                }
                else{
                    result_box.textContent=result_list.ENTJ.character
                    nick.textContent=result_list.ENTJ.nickname
                    character.src=result_list.ENTJ.pic
                    alert("ENTJ")
                }
                
            }

        }
    }
}

function goToResult(){
    getMBTI()
    qna_content.style.display='none'
    result_content.style.display='block'
}

function AddI(){
    //ISTP
    if(MBTI.Qnum==1){
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q2
        one.textContent=answer_list.q2.a1
        two.textContent=answer_list.q2.a2
    }else if(MBTI.Qnum==2){
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q3
        one.textContent=answer_list.q3.a1
        two.textContent=answer_list.q3.a2
    }
    else if(MBTI.Qnum==3){
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q4
        one.textContent=answer_list.q4.a1
        two.textContent=answer_list.q4.a2
        //I and E
    }
    else if(MBTI.Qnum==4){
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q5
        one.textContent=answer_list.q5.a1
        two.textContent=answer_list.q5.a2
    }
    else if(MBTI.Qnum==5){
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q6
        one.textContent=answer_list.q6.a1
        two.textContent=answer_list.q6.a2
    }
    else if(MBTI.Qnum==6){
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q7
        one.textContent=answer_list.q7.a1
        two.textContent=answer_list.q7.a2
        //S and N
    }else if(MBTI.Qnum==7){
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q8
        one.textContent=answer_list.q8.a1
        two.textContent=answer_list.q8.a2
    }
    else if(MBTI.Qnum==8){
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q9
        one.textContent=answer_list.q9.a1
        two.textContent=answer_list.q9.a2
    }
    else if(MBTI.Qnum==9){
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q10
        one.textContent=answer_list.q10.a1
        two.textContent=answer_list.q10.a2
        //T and F
    }else if(MBTI.Qnum==10){
        MBTI.P++
        MBTI.Qnum++
        ques.textContent=question_list.q11
        one.textContent=answer_list.q11.a1
        two.textContent=answer_list.q11.a2
    }
    else if(MBTI.Qnum==11){
        MBTI.P++
        MBTI.Qnum++
        ques.textContent=question_list.q12
        one.textContent=answer_list.q12.a1
        two.textContent=answer_list.q12.a2
    }
    else if(MBTI.Qnum==12){
        MBTI.P++
        MBTI.Qnum++
        goToResult()
        //결과 화면으로 
        //P and J
    }
    //alert('E: '+MBTI.E+', I: '+MBTI.I+', S: '+MBTI.S+', N: '+MBTI.N+', T: '+MBTI.T+', F: '+MBTI.F+', P: '+MBTI.P+', J: '+MBTI.J+', Qnum is '+MBTI.Qnum)
}

function AddE(){
    if(MBTI.Qnum==1){
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q2
        one.textContent=answer_list.q2.a1
        two.textContent=answer_list.q2.a2
    }else if(MBTI.Qnum==2){
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q3
        one.textContent=answer_list.q3.a1
        two.textContent=answer_list.q3.a2
    }
    else if(MBTI.Qnum==3){
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q4
        one.textContent=answer_list.q4.a1
        two.textContent=answer_list.q4.a2
        //I and E
    }
    else if(MBTI.Qnum==4){
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q5
        one.textContent=answer_list.q5.a1
        two.textContent=answer_list.q5.a2
    }
    else if(MBTI.Qnum==5){
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q6
        one.textContent=answer_list.q6.a1
        two.textContent=answer_list.q6.a2
    }
    else if(MBTI.Qnum==6){
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q7
        one.textContent=answer_list.q7.a1
        two.textContent=answer_list.q7.a2
        //S and N
    }else if(MBTI.Qnum==7){
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q8
        one.textContent=answer_list.q8.a1
        two.textContent=answer_list.q8.a2
    }
    else if(MBTI.Qnum==8){
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q9
        one.textContent=answer_list.q9.a1
        two.textContent=answer_list.q9.a2
    }
    else if(MBTI.Qnum==9){
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q10
        one.textContent=answer_list.q10.a1
        two.textContent=answer_list.q10.a2
        //T and F
    }else if(MBTI.Qnum==10){
        MBTI.J++
        MBTI.Qnum++
        ques.textContent=question_list.q11
        one.textContent=answer_list.q11.a1
        two.textContent=answer_list.q11.a2
    }
    else if(MBTI.Qnum==11){
        MBTI.J++
        MBTI.Qnum++
        ques.textContent=question_list.q12
        one.textContent=answer_list.q12.a1
        two.textContent=answer_list.q12.a2
    }
    else if(MBTI.Qnum==12){
        MBTI.J++
        MBTI.Qnum++
        goToResult()
        //결과 화면으로 
        //P and J
    }
    //alert('E: '+MBTI.E+', I: '+MBTI.I+', S: '+MBTI.S+', N: '+MBTI.N+', T: '+MBTI.T+', F: '+MBTI.F+', P: '+MBTI.P+', J: '+MBTI.J+', Qnum is '+MBTI.Qnum)
}
