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
        pic:"./img/fox.jpg",
        character:"효율적인 게 최고! 행동도 효율적으로, 표현도 효율적으로! 그렇다고 마음마저 효율적인건 아니라니깐! 표현과 마음이 따로 노는 당신은 의외성 NO.1 여우입니다!",
        contents:[
            "성격 1. 당신은 효율성을 최고의 가치로 생각하시는군요! 그래서 짜여진 계획을 고수하기보단 융통성 있게 해결해 나가는 편입니다 또한 가장 효율적으로 문제를 해결하는 것을 마치 게임처럼 즐길 때도 있으시군요!",
            "여행 1. 도심지의 번화한 매력과 목가적인 자연의 매력을 느끼려 여러 곳을 여행할 필요가 없습니다. 두 가지 매력을 한 곳에서 느낄 수 있는 시드니가 있으니까요! 자연과 인간이 만들어낸 조화로운 도시, 시드니에서 극한의 효율성을 추구해보세요!",
            "성격 2. 내 마음을 다 표현하는 것 또한 효율적이지 않다고 생각하여 정서적인 표현조차도 효율적으로 하시네요 그래서 상대방에게 오해를 사기도 합니다. 일상생활에서 느끼는 피로함의 많은 부분을 차지하는 요소이기도 해요. ",
            "여행 2. 여행에서만큼은 표현의 차이에서 오는 피로함을 느끼고 싶지 않아요. 여행지의 매력에 빠져 힐링하기에도 시간이 모자라거든요! 그래서 혼자하는 여행이 편하게 ~느껴지기도 해요~(수정필요)",
            "성격 3. 모험과 스릴을 즐기고 임기응변에 강한 모습을 보여주시는군요. 평소에는 조용한 모습으로 있다가도 아드레날린이 솓구치는 상황을 내심 기대하고 계시네요!",
            "여행 3. 익스트림 스포츠와 트래킹 등 당신의 모험심을 자극하는 즐길거리들이 가득한 시드니! 그렇지만 여행의 전체가 모험과 스릴로 가득하다면 극심한 피로감에 시달리기 때문에 쉴 때는 확실히 쉬어주어야해요! 익스트림 스포츠를 즐긴 뒤 도심지의 호텔에서 즐기는 호캉스까지! 효율성을 추구하는 당신에게. 시드니는 어떤가요? "
        ]
        
        
    },
    ENTP:{
        //현식
        nickname:"최고의 변호인 사자",
        location:"바티칸 시티",
        pic:"./img/lion.jpg",
        character:"어떤 상황에서도 자신만의 이유로 최고의 선택을 할 수 있는 당신은 최고의 변호인 사자입니다!",
        contents:["성격 1. 다른 사람들의 의견보다는 자신만의 확고한 가치관이 있으시군요!  그렇지만 선입견을 가지고 판단하지 않고 새로운 지식들을 있는 그대로 받아들이는 개방적인 성격이시네요.",
        "여행 1. 세계에서 가장 작은 나라 바티칸 시티! 유일한 비세습 선거 전제국가라는 특수성이 주는 매력에 빠져보는 건 어떨까요? 유일무이한 경험을 할 수 있을거에요!",
        "성격 2. 확고한 가치관 때문에 때로는 표현이 직설적이게 느껴지지만, 그러한 솔직함이 당신의 매력 포인트입니다!",
        "여행 2. 하지만 직설적인 표현으로 인해 일행들과의 마찰이 걱정되기도 해요. 그래서 혼자하는 여행을 선호하는 편입니다. 교황청의 근위대가 직접 치안을 담당하는 바티칸 시티에서 마음 놓고 나홀로 여행을 즐겨보세요!",
        "성격 3. 본인이 납득할 수 있는 근거들과 논리적으로 타당한 것들에 흥미를 느끼는 사람입니다. 다른 사람들이 놓치기 쉬운 부분들을 캐치하여 관찰하는 뛰어난 통찰력의 소유자입니다.",
        "여행 3.  도시 전체가 유네스코 세계문화유산으로 지정된 바티칸 시티에서 당신을 기다리는 예술품들을 만나보는건 어떤가요? 열쇠모양으로 생긴 성 베드로 광장부터 미켈란젤로의 천장벽화, 심지어는 걸어다니며 보는 건물들 모두가 하나의 예술품인 도시! 마치 박물관을 여행하는 듯한 기분에 빠져보세요"]
    },
    ENTJ:{
        //현식
        nickname:"영원한 학생회장 흰수염고래 ",
        location:"오스트리아 빈",
        pic:"./img/whale.jpg",
        character:"이번이 마지막이야… 라고 했지만 어느새 총대를 메고 있는 당신! 어디에서나 밝은 빛으로 사람들을 이끄는 당신은 영원한 학생회장 흰수염고래입니다!",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ISFJ:{
        //대현
        nickname:"듬직한 코뿔소",
        location:"뉴질랜드 남섬",
        //태국 방콕 or 뉴질랜드 남섬?
        pic:"./img/rhino.jpg",
        character:"누구보다 따듯한 마음씨로 주변 사람들을 보듬어주는 당신은 듬직한 코뿔소입니다! 남들을 챙기느라 정작 자신은 돌보진 못한 당신, 코로나가 끝나고선 여지껏 뒷전이었던 자신의 마음을 치유해줄 수 있는 여행지인 뉴질랜드는 어떠신가요?",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    INFP:{
        //대현
        nickname:"연약한 아기고양이",
        location:"캐나다",
        //홍콩 or 캐나다?
        pic:"./img/kitty.jpg",
        character:"꼬리에 꼬리를 무는 공상의 나래를 펼치기도 하고, 남모를 고민과 걱정도 많은 당신은 연약한 아기고양이입니다! 남들에게 구애받지 않고 조용한 곳에서 상상의 나래를 맘껏 펼쳐볼 수 있는 캐나다는 어떠신가요?",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    INFJ:{
        //대현
        nickname:"물 위의 해달",
        location:"스위스",
        pic:"./img/haedal.jpg",
        character:"주변 사람들에게 신경을 많이 쓰면서도 쉽게 휘둘리지는 않는, 창의성과 통찰력을 바탕으로 차분하게 사고하는 당신은 물 위의 해달입니다! 고요한 자연 속에서 혼자만의 사색을 즐길 수 있는 여행지인 스위스는 어떠신가요?",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ENFP:{
        //지유
        nickname:"타고난 인싸 쿼카",
        location:"브라질 리우",
        pic:"./img/quaka.jpg",
        character:"당신은 다른 사람들에게 관심이 많은 타고난 인싸 쿼카입니다! ",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ISFP:{
        //지유
        nickname:"순한 양",
        location:"프랑스 파리",
        pic:"./img/sheep.jpg",
        character:"넓은 포용력을 가지고, 현재를 즐기는 순해보이지만 무는 양입니다.  ",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ESFP:{
        //지유
        nickname:"고민없이 들판을 누비는 토끼",
        location:"미국 뉴욕",
        pic:"./img/rabbit.jpg",
        character:"당신은 활동적이고, 사교적인 들판을 누비는 토끼입니다!",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    INTP:{
        //지유
        nickname:"고독한 고양이",
        location:"몽골",
        pic:"./img/cat.jpg",
        character:"고독한 고양이 입니다!",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ENFJ:{
        //주훈
        nickname:"포옹을 좋아하는 반달가슴곰",
        location:"이탈리아 로마",
        pic:"./img/bear.jpg",
        character:"당신은 인류애 뿜뿜하고, 따뜻한 마음을 가지고 있는 포옹을 좋아하는 반달가슴곰입니다! 많은 사람들의 흔적이 숨쉬는 이탈리아 로마 어떠세요?",
        contents:[
            "주변 사람들의 감정을 파악하는 능력과 그에 맞춰 행동하는 능력 원탑 소유자입니다 !",
            "여행에서 갈등이 일어나지 않도록 노력하고, 갈등이 일어나도 최대한 잘 해결되도록 애쓰시는 편이네요!",
            "사람들을 만나는 것을 좋아하고, 사람들 속에서 에너지를 얻으며, 어느새 주변 사람들에게 에너지를 나눠주고 계시네요!",
            "사람들과 함께하는 여행에서 몸이 힘든 것들을 소중한 사람들과 함께 한다는 마음으로 즐겁게 이겨내실 것 같아요!",
            "계획 세우는 것을 즐기고 선호하지만, 계획들 사이에 즉흥이 끼어들 자리를 남겨주는 센스를 가지고 있으시네요.",
            "여행 계획을 세울 때, 함께 가는 사람들의 취향을 고려하여 모두를 만족시킬 여행 계획을 세우면서 설레고 계시네요."
        ]
    },
    INTJ:{
        //주훈
        nickname:"공학을 공부하는 방울뱀",
        location:"미국 캘리포니아",
        pic:"./img/snake.jpg",
        character:"당신은 독립심이 강하고, 관심 분야에 몰두하는 목표지향적인 공학을 공부하는 방울뱀입니다! 수많은 관광지를 효율적으로 둘러볼 수 있는 미국 캘리포니아 어떠세요?",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ESTP:{
        //주훈
        nickname:"이곳 저곳을 둘러보는 치와와",
        location:"러시아 시베리아 횡단열차",
        pic:"./img/chiwawa.jpg",
        character:"당신은 모험심이 뛰어나고, 탁월한 개방성을 바탕으로 탐험하는 것을 즐기는 이곳저곳 둘러보는 치와와입니다. 많은 것들을 구경할 수 있는 러시아 시베리아 횡단열차 여행을 추천합니다.",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ESTJ:{
        //준희
        nickname:"안경 쓴 부엉이 박사",
        location:"그리스 아테네",
        pic:"./img/owl.jpg",
        character:"당신은 여행지에 왔으면 의미있는 유적을 꼭 보고 가야하는 안경 쓴 부엉이 박사입니다 ! 현대사회를 지탱하는 여러 가치들이 기원한 그리스 아테네 어떠세요?",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ISTJ:{
        //준희
        nickname:"독야청청 독수리 선생님",
        location:"싱가포르",
        pic:"./img/eagle.jpg",
        character:"당신은 다른 사람과 함께 하기보단 자신의 계획대로 여행하는 것을 좋아하는 독야청청 독수리 선생님 입니다. 혼자서도 알찬 여행이 가능한 싱가포르가 어울리네요 !",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
    },
    ESFJ:{
        //준희
        nickname:"발빠른 다람쥐",
        location:"말레이시아 코타키나 발루",
        pic:"./img/squr.jpg",
        character:"당신은 유적지, 명소보다는 새로운 사람들과 어울리고 대화하기를 좋아하는 발빠른 다람쥐 입니다.  다양한 사람들과 아름다운 이야기를 하며 다양한 투어를 즐길 수 있는 코타키나발루는 어떠신가요? ",
        contents:[
            "성격 1. 나서서 이끌어 가는걸 좋아한다기보다는 다른 사람들이 하는게 맘에 들지 않아서 나서게 되는군요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 자기도 모르게 버스기사가 되어있는 모습을 발견하기도 합니다.",
            "여행 1. 여행에서만큼은 조금 내려놓아보는건 어떨까요? 오로지 휴식만을 생각하는거에요. 발렌시아의 따스한 햇살과 함께 해안길을 걸으며 힐링해보는 여행을 추천드려요",
            "성격 2. 완전히 혼자 있는 것도, 아주 북적대는 것도 힘들어 하시는군요. 반복되는 일상에 지루함을 느끼고 변화를 즐기는 타입이시네요!",
            "여행 2. 우리나라와 문화, 정서적으로 많이 다른 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보세요. 누구도 나를 신경쓰지 않지만, 누구에게나 따뜻한 도시 발렌시아에서!",
            "성격 3. 일을 함에 있어서 완벽을 추구하기 때문에 항상 계획을 하고 실행하는 타입이시군요!",
            "여행 3. 다양한 대중교통들이 잘 짜여져 있어 계획에 맞게 여행하기 좋은 도시에요.  시가지의 문화예술단지인 예술과학도시와, 시가지로부터 조금 떨어진 곳에 길게 펼쳐진 해안가 등 다양한 즐길거리가 있어 계획짜는 재미가 있을거에요!"
        ]
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
                    zero_.textContent=result_list.ISFP.contents[0]
                    one_.textContent=result_list.ISFP.contents[1]
                    two_.textContent=result_list.ISFP.contents[2]
                    three_.textContent=result_list.ISFP.contents[3]
                    four_.textContent=result_list.ISFP.contents[4]
                    five_.textContent=result_list.ISFP.contents[5]
                    nick.textContent=result_list.ISFP.nickname
                    character.src=result_list.ISFP.pic
                    alert("ISFP")
                }
                else{
                    result_box.textContent=result_list.ISFJ.character
                    nick.textContent=result_list.ISFJ.nickname
                    zero_.textContent=result_list.ISFJ.contents[0]
                    one_.textContent=result_list.ISFJ.contents[1]
                    two_.textContent=result_list.ISFJ.contents[2]
                    three_.textContent=result_list.ISFJ.contents[3]
                    four_.textContent=result_list.ISFJ.contents[4]
                    five_.textContent=result_list.ISFJ.contents[5]
                    character.src=result_list.ISFJ.pic
                    alert("ISFJ")
                }
            }
            else{
                //IST
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ISTP.character
                    zero_.textContent=result_list.ISTP.contents[0]
                    one_.textContent=result_list.ISTP.contents[1]
                    two_.textContent=result_list.ISTP.contents[2]
                    three_.textContent=result_list.ISTP.contents[3]
                    four_.textContent=result_list.ISTP.contents[4]
                    five_.textContent=result_list.ISTP.contents[5]
                    nick.textContent=result_list.ISTP.nickname
                    character.src=result_list.ISTP.pic
                    alert("ISTP")
                }
                else{
                    result_box.textContent=result_list.ISTJ.character
                    nick.textContent=result_list.ISTJ.nickname
                    zero_.textContent=result_list.ISTJ.contents[0]
                    one_.textContent=result_list.ISTJ.contents[1]
                    two_.textContent=result_list.ISTJ.contents[2]
                    three_.textContent=result_list.ISTJcontents[3]
                    four_.textContent=result_list.ISTJ.contents[4]
                    five_.textContent=result_list.ISTJ.contents[5]
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
                    zero_.textContent=result_list.INFP.contents[0]
                    one_.textContent=result_list.INFP.contents[1]
                    two_.textContent=result_list.INFP.contents[2]
                    three_.textContent=result_list.INFP.contents[3]
                    four_.textContent=result_list.INFP.contents[4]
                    five_.textContent=result_list.INFP.contents[5]
                    character.src=result_list.INFP.pic
                    alert("INFP")
                }
                else{
                    result_box.textContent=result_list.INFJ.character
                    nick.textContent=result_list.INFJ.nickname
                    zero_.textContent=result_list.INFJ.contents[0]
                    one_.textContent=result_list.INFJ.contents[1]
                    two_.textContent=result_list.INFJ.contents[2]
                    three_.textContent=result_list.INFJ.contents[3]
                    four_.textContent=result_list.INFJ.contents[4]
                    five_.textContent=result_list.INFJ.contents[5]
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
                    zero_.textContent=result_list.INTP.contents[0]
                    one_.textContent=result_list.INTP.contents[1]
                    two_.textContent=result_list.INTP.contents[2]
                    three_.textContent=result_list.INTP.contents[3]
                    four_.textContent=result_list.INTP.contents[4]
                    five_.textContent=result_list.INTP.contents[5]
                    alert("INTP")
                }
                else{
                    result_box.textContent=result_list.INTJ.character
                    nick.textContent=result_list.INTJ.nickname
                    character.src=result_list.INTJ.pic
                    zero_.textContent=result_list.INTJ.contents[0]
                    one_.textContent=result_list.INTJ.contents[1]
                    two_.textContent=result_list.INTJ.contents[2]
                    three_.textContent=result_list.INTJ.contents[3]
                    four_.textContent=result_list.INTJ.contents[4]
                    five_.textContent=result_list.INTJ.contents[5]
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
                    zero_.textContent=result_list.ESFP.contents[0]
                    one_.textContent=result_list.ESFP.contents[1]
                    two_.textContent=result_list.ESFP.contents[2]
                    three_.textContent=result_list.ESFP.contents[3]
                    four_.textContent=result_list.ESFP.contents[4]
                    five_.textContent=result_list.ESFP.contents[5]
                    alert("ESFP")
                }
                else{
                    result_box.textContent=result_list.ESFJ.character
                    nick.textContent=result_list.ESFJ.nickname
                    zero_.textContent=result_list.ESFJ.contents[0]
                    one_.textContent=result_list.ESFJ.contents[1]
                    two_.textContent=result_list.ESFJ.contents[2]
                    three_.textContent=result_list.ESFJ.contents[3]
                    four_.textContent=result_list.ESFJ.contents[4]
                    five_.textContent=result_list.ESFJ.contents[5]
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
                    zero_.textContent=result_list.ESTP.contents[0]
                    one_.textContent=result_list.ESTP.contents[1]
                    two_.textContent=result_list.ESTP.contents[2]
                    three_.textContent=result_list.ESTP.contents[3]
                    four_.textContent=result_list.ESTP.contents[4]
                    five_.textContent=result_list.ESTP.contents[5]
                    alert("ESTP")
                }
                else{
                    result_box.textContent=result_list.ESTJ.character
                    nick.textContent=result_list.ESTJ.nickname
                    character.src=result_list.ESTJ.pic
                    zero_.textContent=result_list.ESTJ.contents[0]
                    one_.textContent=result_list.ESTJ.contents[1]
                    two_.textContent=result_list.ESTJ.contents[2]
                    three_.textContent=result_list.ESTJ.contents[3]
                    four_.textContent=result_list.ESTJ.contents[4]
                    five_.textContent=result_list.ESTJ.contents[5]
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
                    zero_.textContent=result_list.ENFP.contents[0]
                    one_.textContent=result_list.ENFP.contents[1]
                    two_.textContent=result_list.ENFP.contents[2]
                    three_.textContent=result_list.ENFP.contents[3]
                    four_.textContent=result_list.ENFP.contents[4]
                    five_.textContent=result_list.ENFP.contents[5]
                    alert("ENFP")
                }
                else{
                    result_box.textContent=result_list.ENFJ.character
                    nick.textContent=result_list.ENFJ.nickname
                    character.src=result_list.ENFJ.pic
                    zero_.textContent=result_list.ENFJ.contents[0]
                    one_.textContent=result_list.ENFJ.contents[1]
                    two_.textContent=result_list.ENFJ.contents[2]
                    three_.textContent=result_list.ENFJ.contents[3]
                    four_.textContent=result_list.ENFJ.contents[4]
                    five_.textContent=result_list.ENFJ.contents[5]
                    alert("ENFJ")
                }
            }
            else{
                //ENT
                if(MBTI.P>MBTI.J){
                    result_box.textContent=result_list.ENTP.character
                    nick.textContent=result_list.ENTP.nickname
                    character.src=result_list.ENTP.pic
                    zero_.textContent=result_list.ENTP.contents[0]
                    one_.textContent=result_list.ENTP.contents[1]
                    two_.textContent=result_list.ENTP.contents[2]
                    three_.textContent=result_list.ENTP.contents[3]
                    four_.textContent=result_list.ENTP.contents[4]
                    five_.textContent=result_list.ENTP.contents[5]
                    alert("ENTP")
                }
                else{
                    result_box.textContent=result_list.ENTJ.character
                    nick.textContent=result_list.ENTJ.nickname
                    character.src=result_list.ENTJ.pic
                    zero_.textContent=result_list.ENTJ.contents[0]
                    one_.textContent=result_list.ENTJ.contents[1]
                    two_.textContent=result_list.ENTJ.contents[2]
                    three_.textContent=result_list.ENTJ.contents[3]
                    four_.textContent=result_list.ENTJ.contents[4]
                    five_.textContent=result_list.ENTJ.contents[5]
                    alert("ENTJ")
                }
                
            }

        }
    }
}

function goToResult(){
    getMBTI()
    qna_content.style.display='none'
    result_content.style.visibility='visible'
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
