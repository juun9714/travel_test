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
    q1:"Q1. 기다리고 기다리던 코로나 종식 선언! 친한 친구와 함께 해외 여행을 떠나기로 한다. 여행 코스를 짜고 있는 당신의 모습은?",
    q2:"Q2. 이번 여행지에는 그 지역만의 다이나믹한 액티비티와 감성적이고 조용한 카페가 유명하다. 선호하는 곳은?",
    q3:"Q3. 여행 가기 전, 짐을 챙기는 당신의 모습과 더 비슷한 것은?",
    q4:"Q4. 여행 계획을 이야기하는 중이다. 아앗,,, 친구가 열심히 생각해온 코스에서 많은 문제점이 보인다. 당신의 반응은?",
    q5:"Q5. 드디어 숙소에 도착했다 ! 다음날 아침, 조식을 먹으러 나서는 순간 보이는 식탁에 어젯밤 어색한 눈인사만 나눈 룸메가 조식을 먹고있다. 당신은 주로?",
    q6:"Q6. 여행 중 지갑을 떨어뜨렸다. 다행히 뒤에 있던 분이 지갑을 주워주셨다. 이럴 수가, 디테일까지 전부 취향저격 ! 꿈에 그리던 완전한 이상형 그 자체다 !",
    q7:"Q7. 여행 도중, 즐겨보던 유튜버가 촬영하는 것을 목격했다. 어...? 나에게 다가와서 인터뷰를 부탁한다.",
    q8:"Q8. 친구와 같이 유명한 공연을 보러 극장에 간 당신! 아뿔싸, 친구가 숙소에 티켓을 두고 왔다고 당황하며 말한다. 당신이 맨 처음 보일 반응은?",
    q9:"Q9. 여행지의 유명 미술관 혹은 박물관에 들어간 당신의 모습은?",
    q10:"Q10. 여행 중, 별 빛 아래에서 친구와 술 한 잔 하면서 딥토크 중이다. 친구가 맘 속에 묻어놨던 고민을 털어놓는다. 당신이 맨 처음 보일 반응은?",
    q11:"Q11. 여행지의 유명 맛집을 찾아갔다. 그러나 오늘이 하필 휴무일이다.",
    q12:"Q12. 급히 다음 코스로 향하는 도중 고막을 사로잡는 매력적인 버스킹이 진행 중이다.",
}
const gauge_list={
    q1:"img/gauge/gauge1.png", 
    q2:"img/gauge/gauge2.png",
    q3:"img/gauge/gauge3.png",
    q4:"img/gauge/gauge4.png",
    q5:"img/gauge/gauge5.png",
    q6:"img/gauge/gauge6.png",
    q7:"img/gauge/gauge7.png",
    q8:"img/gauge/gauge8.png",
    q9:"img/gauge/gauge9.png",
    q10:"img/gauge/gauge10.png",
    q11:"img/gauge/gauge11.png",
    q12:"img/gauge/gauge12.png"
}
const answer_list={
    q1:{
        a1:"img/choice/01_a.png",
        a2:"img/choice/01_b.png"
    },
    q2:{
        a1:"img/choice/02_a.png",
        a2:"img/choice/02_b.png"
    },
    q3:{
        a1:"img/choice/03_a.png",
        a2:"img/choice/03_b.png"
    },
    q4:{
        a1:"img/choice/04_a.png",
        a2:"img/choice/04_b.png"
    },
    q5:{
        a1:"img/choice/05_a.png",
        a2:"img/choice/05_b.png"
    },
    q6:{
        a1:"img/choice/06_a.png",
        a2:"img/choice/06_b.png"
    },
    q7:{
        a1:"img/choice/07_a.png",
        a2:"img/choice/07_b.png"
    },
    q8:{
        a1:"img/choice/08_a.png",
        a2:"img/choice/08_b.png"
    },
    q9:{
        a1:"img/choice/09_a.png",
        a2:"img/choice/09_b.png"
    },
    q10:{
        a1:"img/choice/10_a.png",
        a2:"img/choice/10_b.png"
    },
    q11:{
        a1:"img/choice/11_a.png",
        a2:"img/choice/11_b.png"
    },
    q12:{
        a1:"img/choice/12_a.png",
        a2:"img/choice/12_b.png"
    }
}

const result_list={
    ISTP:{
        //현식
        board_img:"./img/result/11redfox_ISTP/resultPage_board11_ISTP.png",
        summary:"당신은 호주 시드니를 여행하고 있는 반전 매력을 소유한 여우입니다.",
        nickname:"반전 매력을 소유한 여우",
        character_img:"./img/result/11redfox_ISTP/resultPage_character11_ISTP.png",
        character:[
            "당신은 효율성을 최고의 가치로 생각하시는군요! 짜여진 계획을 고수하기보단 융통성 있게 해결해 나가는 편이에요. 또한 가장 효율적으로 문제를 해결하는 것을 마치 게임처럼 즐기시네요. 또, 모험과 스릴을 즐기고 임기응변에 강한 모습을 보여주기도 해요.",
            "조용한 모습으로 있으면서도, 아드레날린이 솟구치는 상황을 내심 기대하고 계신거 다 알아요 :) 그렇지만 여행의 전체가 모험과 스릴로 가득하다면 피로감에 시달릴 수 있으니 쉴 때는 확실히 쉬어주어야 한답니다 !"
        ],
        location:"호주 시드니",
        loca_img:"./img/result/11redfox_ISTP/resultPage_landscape11_ISTP.png",
        contents:[
            "도심지의 번화한 매력과 목가적인 자연의 매력을 한 곳에서 느낄 수 있는 시드니로 떠나세요 ! 자연과 인간이 만들어낸 조화로운 도시, 시드니에서 극한의 효율성을 실현할 수 있을 거에요 ",
            "세계에서 손꼽는 오페라 하우스인 시드니 오페라 하우스, 하버브릿지 같은 도심의 랜드마크에, 스노클링과 스쿠버다이빙을 즐길 수 있는 맨리비치, 본다이 비치까지! 당신의 모험심을 자극하는 즐길거리가 가득해요. 하루는 랜드마크가 주는 웅장함을, 하루는 자연이 주는 편안함과 경이로움을 느껴보세요",
            "안경 쓴 부엉이 박사와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"안경 쓴 부엉이 박사",
        partner_img:"./img/result/4owl_ESTJ/resultPage_character4_ESTJ.png"
    },
    ENTP:{
        //현식
        board_img:"./img/result/10lion_ENTP/resultPage_board10_ENTP.png",
        summary:"당신은 바티칸 시티를 여행하고 있는 매 순간 최선의 결정을 내리는 사자입니다.",
        nickname:"매 순간 최선의 결정을 내리는 사자",
        character_img:"./img/result/10lion_ENTP/resultPage_character10_ENTP.png",
        character:[
            "당신에게는 자신만의 확고한 가치관이 있어요! 하지만 동시에 선입견 없이 새로운 생각들을 있는 그대로 받아들이는 개방적인 성격이시네요.",
            "납득할만한 근거가 있고, 논리적으로 타당한 것들에 흥미를 느끼는 편이에요. 놓치기 쉬운 것도 캐치하여 깊게 관찰하는 뛰어난 통찰력의 소유자시군요. 곳곳에 숨어있는 디테일들을 찾을 수 있는 여행지는 어떠신가요?"
        ],
        location:"바티칸 시티",
        loca_img:"./img/result/10lion_ENTP/resultPage_landscape10_ENTP.png",
        contents:[
            "세계에서 가장 작은 나라 바티칸 시티! 교황청의 근위대가 직접 치안을 담당하기에 혼자라도 안전하게 여행하기 좋은 도시이자 국가! 유일한 비세습 선거 전제국가라는 특수성이 주는 매력도 있답니다. 분명 유일무이한 경험을 할 수 있을거에요!",
            "도시 전체가 유네스코 세계문화유산인 바티칸 시티의 예술품들이 당신을 기다리고 있어요 :) 열쇠모양으로 생긴 성 베드로 광장부터 미켈란젤로의 천장벽화, 심지어는 지금 내 옆에 있는 건물도 하나의 예술품인 도시! 마치 박물관을 여행하는 듯한 기분에 빠져보세요",
            "공학을 공부하는 방울뱀과 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"공학을 공부하는 방울뱀",
        partner_img:"./img/result/2snake_INTJ/resultPage_character2_INTJ.png"
    },
    ENTJ:{
        //현식
        board_img:"./img/result/12whale_ENTJ/resultPage_board12_ENTJ.png",
        summary:"당신은 스페인 발렌시아를 여행하고 있는 어디서나 사람들을 이끄는 흰수염고래입니다.",
        nickname:"어디서나 사람들을 이끄는 흰수염고래",
        character_img:"./img/result/12whale_ENTJ/resultPage_character12_ENTJ.png",
        character:[
            "나서서 이끄는걸 좋아하지는 않지만, 다른 사람들이 하는게 맘에 들지 않아 팔을 걷어붙이게 되네요. 이것만 끝나면…이번만 지나면…하고 다짐하지만 또 다시 버스기사가 되어있는 모습을 발견하게 돼요 ;)",
            "늘 책임감 있는 모습도 멋지지만, 여행에서만큼은 조금 내려놓아 봐요 우리. 오로지 휴식만을 생각하는거에요. 색다른 문화와 정서를 가진 유럽의 한 도시에서, 적당한 거리감을 유지한 채 휴식을 즐겨보자구요 !"
        ],
        location:"스페인 발렌시아",
        loca_img:"./img/result/12whale_ENTJ/resultPage_landscape12_ENTJ.png",
        contents:[
            "따스한 햇살 아래의 해안길과 로마시대부터 중세에 이르기까지 다양한 양식의 건축물이 있는 발렌시아에서 오로지 휴식만을 위한 힐링 여행을 즐겨보세요. 스페인 발렌시아는 온화한 기후와 더불어 성 요셉을 기리는 파예스 축제로도 유명해요.",
            "이슬람과 카톨릭문화가 공존하여 이색적인 문화들을 느낄 수 있어요! 또, 버클리음대의 대학원이 있어 예술적 감각도 느껴볼 수 있답니다!",
            "고독한 고양이와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"고독한 고양이",
        partner_img:"./img/result/13cat_INTP/resultPage_character13_INTP.png"
    },
    ISFJ:{
        //대현
        board_img:"./img/result/9rhino_ISFJ/resultPage_board9_ISFJ.png",
        summary:"당신은 스위스를 여행하는 듬직한 서포터 코뿔소입니다.",
        nickname:"듬직한 서포터 코뿔소",
        character_img:"./img/result/9rhino_ISFJ/resultPage_character9_ISFJ.png",
        character:[
            "여행을 떠날 때 꼼꼼한 일정이 없으면 안된다고 생각하는 당신! 특유의 책임감으로 동행자들의 의견을 모아 구체적인 계획과 일정을 세우는 데에 전문가네요!",
            "또, '무슨 일이 벌어질지 몰라!' 이것도 챙기고, 저것도 챙기고. 보따리 장수가 여기 있네요 :) 누구보다 당신의 계획에 잘 따라주고 즐거워할 동료와 함께 여행을 떠난다면 당신의 준비성이 빛을 발할 거에요!"
        ],
        location:"스위스",
        loca_img:"./img/result/9rhino_ISFJ/resultPage_landscape9_ISFJ.png",
        contents:[
            "왁자지껄한 장소에서 벗어나 스위스패스로 융프라우의 산악 열차를 타고 아름다운 산맥을 바라보며 혼자만의 고요한 시간을 보내볼까요 :) 인터라켄, 브리엔츠 호수, 그린덴발트, 융프라우를 지나며 동화 속에 들어온 듯 한 기분을 느껴보세요!", 
            "자연이 스위스의 전부는 아니에요! 베른, 취리히, 루체른 등의 미술관의 수많은 작품과 음악회의 선율에 푹 빠져 보는 것도 좋을 것 같네요! 주변을 돌보느라 정작 자신에게는 소홀했을 수 있는 당신! 필라투스에 올라 야경을 보며 자신의 마음을 살피는 시간을 가져보아요. 알프스 산맥과 6개의 호수가 펼쳐진 땅 위에서 별이 쏟아지는 풍경은 분명 지친 마음을 따듯하게 위로해 줄거에요",
            "이곳저곳 둘러보는 치와와와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"이곳저곳 둘러보는 치와와",
        partner_img:"./img/result/3chihuahua_ESTP/resultPage_character13_ESTP.png"
    },
    INFP:{
        //대현
        board_img:"./img/result/7pussycat_INFP/resultPage_board7_INFP.png",
        summary:"당신은 뉴질랜드를 여행하고 있는 꿈꾸는 연약한 아기고양이입니다.",
        nickname:"꿈꾸는 연약한 아기고양이",
        character_img:"./img/result/7pussycat_INFP/resultPage_character7_INFP.png",
        character:[
            "당신은 세세하기보단, 큼직한 일정을 중심으로 융통성 있고 즉흥적인 여행을 즐기시는군요 ! 일정 때문에 마음에 꽂힌 장소를 지나치는 일은 정말 고통스러워요 :( 그러니 꼭 가야 할 곳 정도를 정해서 계획을 짜는게 좋겠어요.", 
            "꼭 가고싶은 곳들을 조합해 융통성도 있고, 완벽한 계획을 만드는 친구와 함께라면 편히 여행을 할 수 있지 않을까요? 당신이 가고싶은 곳들을 들리면서, 늘어지지도 않는 계획과 함께 즐거운 여행을 할 수 있을 거에요!"
        ],
        location:"뉴질랜드",
        loca_img:"./img/result/7pussycat_INFP/resultPage_landscape7_INFP.png",
        contents:[
            "누구보다 조용한 곳과 그 순간들을 사랑하는 당신에게 뉴질랜드를 추천해요! 뉴질랜드의 조용한 자연을 즐기면서 떠오르는 상상들을 마음껏 흘러가게 둬보는 것은 어떨까요?",
            "경치가 멋진 남섬의 피오르드랜드 국립공원을 추천해요. 머릿 속이 복잡할 땐 테카포에 가만히 누워 쏟아지는 은하수를 바라보며 떠오르는 기억과 생각들을 그대로 마주하는 시간을 가져봐요. 몸도 마음도 지쳐버렸다면 퀸즈타운의 온천에서 몸도 마음도 돌보는 시간을 가져보는 것도 좋아요!",
            "포옹을 좋아하는 반달가슴곰과 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"포옹을 좋아하는 반달가슴곰",
        partner_img:"./img/result/1bear_ENFJ/resultPage_character1_ENFJ.png"
    },
    INFJ:{
        //대현
        board_img:"./img/result/8seaotter_INFJ/resultPage_board8_INFJ.png",
        summary:"당신은 캐나다를 여행하는 사색하는 평온한 해달입니다.",
        nickname:"사색하는 평온한 해달",
        character_img:"./img/result/8seaotter_INFJ/resultPage_character8_INFJ.png",
        character:[
            "계획을 세우는 것 자체를 좋아하기 때문에 일찍부터 굵직한 여행지들을 알아보곤 하는군요! 더구나 '이왕 가는 여행, 의미 없는 여행이 되어선 안돼!'라는 생각으로 만반의 준비를 기하는 당신, 벌써 보이네요 :)", 
            "남들의 눈을 많이 신경 쓰기에 어쩌면 혼자만의 시간이 꼭 필요할 거에요. 고요한 자연 한 가운데에 잠시 멈춰 커피 한 잔과 함께 사색에 잠겨보아요."
        ],
        location:"캐나다",
        loca_img:"./img/result/8seaotter_INFJ/resultPage_landscape8_INFJ.png",
        contents:[
            "캐나다 구석구석의 자연 경관 명소들은 한적하면서도 아름다운 경치를 자랑하고 있어요. 로키산맥의 설산이나 캐나다 북쪽의 오로라의 장엄함을 느껴보는 것을 추천해요. 마음 속에 답답함이 가득할 땐, 쏟아지는 나이아가라 폭포의 웅장한 광경이 분명 마음을 후련하게 만들어 줄 거에요!",
            "자연경관이 캐나다의 전부는 아니에요! 길거리 버스커들의 음악을 즐길수도 있고, 캐나다 국립 미술관, 혹은 몬트리올 미술관의 예술 작품을 보러 갈 수도 있고, 빅토리아, 퀘벡 등에 있는 역사적인 장소들을 방문해볼 수도 있어요!",
            "타고난 인싸 쿼카와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"타고난 인싸 쿼카",
        partner_img:"./img/result/14quokka_ENFP/resultPage_character14_ENFP.png"
    },
    ENFP:{
        //지유
        board_img:"./img/result/14quokka_ENFP/resultPage_board14_ENFP.png",
        summary:"당신은 아르헨티나 부에노스아이레스를 여행하고 있는 타고난 인싸 쿼카입니다.",
        nickname:"타고난 인싸 쿼카",
        character_img:"./img/result/14quokka_ENFP/resultPage_character14_ENFP.png",
        character:[
            "새로운 여행지에서 요즘 유행하는 액티비티, 핫플은 다 경험해봐야지 만족하는 스타일이에요. 할 것은 많은데 계획 짜는 것 자체를 귀찮게 느껴서 비행기 타기 직전까지 무계획일 가능성이 크군요!",  
            "하지만 친구들과 함께하는 여행에서는 총대를 메고 여행계획부터 총무까지 도맡아서 모두가 만족하는 여행을 만들어 가는 스타일이에요!"
        ],
        location:"아르헨티나 부에노스아이레스",
        loca_img:"./img/result/14quokka_ENFP/resultPage_landscape14_ENFP.png",
        contents:[
            "탱고의 발상지, 아르헨티나 부에노스아이레스가 주는 특유의 다채로움을 느껴보세요. 새로운 일에 거리낌 없는 당신! 탱고 원데이 클래스에서 열정을 직접 경험해보세요. 부에노스아이레스의 라보카 지구에서 탱고 클래스에 참여한 뒤, 다채로운 건물 사이에서 와인과 아사도(스테이크)를 즐기며 야외 탱고 공연을 즐겨보세요.",
            "다양한 액티비티로 지쳤다면, 세상에서 가장 아름다운 서점으로 알려진 엘 아테네오에 방문해서 책을 읽으며 잠깐 휴식을 취해보는 것도 좋을 것 같네요 :)",
            "사색하는 평온한 해달과 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"사색하는 평온한 해달",
        partner_img:"./img/result/8seaotter_INFJ/resultPage_character8_INFJ.png"
    },
    ISFP:{
        //지유
        board_img:"./img/result/15sheep_ISFP/resultPage_board15_ISFP.png",
        summary:"당신은 오스트리아 빈을 여행하고 있는 주변 풍경을 즐기는 양입니다.",
        nickname:"주변 풍경을 즐기는 양",
        character_img:"./img/result/15sheep_ISFP/resultPage_character15_ISFP.png",
        character:[
            "사람이 많은 곳에 가면 지치는 스타일이에요. 유명한 관광지에 방문한 뒤에는 공원이나 카페에서 잠깐 쉬어주어야 해요! 혼자 여행을 떠나 나만의 시간을 확보하는 것이 더 편할거에요.",
            "하지만 친구와 함께 여행을 가더라도 타고난 배려심 덕분에 즐거운 추억들을 가지고 올 수 있을거에요!"
        ],
        location:"오스트리아 빈",
        loca_img:"./img/result/15sheep_ISFP/resultPage_landscape15_ISFP.png",
        contents:[
            "낭만적인 예술과 어우러지는 풍경을 즐길 수 있는 오스트리아 빈에서 감수성에 빠져보세요! 평화주의자인 당신이 좋아할 수 밖에 없는 마음이 느긋한 도시에요. 990여개가 넘는 공원이 있어 햇살 아래 벤치에 앉아 잠시 머리를 비워보세요!",
            "오스트리아 빈은 음악의 도시로 유명하지만, 비엔나 커피가 유래한 도시답게 3대 카페가 있답니다. 특히, 음악가, 건축가, 철학가 등 모든 유명인사들이 사랑했던 카페 첸트랄을 추천해요!  피아노 소리를 들으며 비엔나 커피 한 잔의 여유를 즐기세요.",
            "발빠른 다람쥐와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"발빠른 다람쥐",
        partner_img:"./img/result/6squirrel_ESFJ/resultPage_character6_ESFJ.png"
    },//////
    ESFP:{
        //지유
        board_img:"./img/result/16rabbit_ESFP/resultPage_board16_ESFP.png",
        summary:"당신은 스페인 바로셀로나를 여행하고 있는 들판을 누비는 토끼입니다.",
        nickname:"들판을 누비는 토끼",
        character_img:"./img/result/16rabbit_ESFP/resultPage_character16_ESFP.png",
        character:[
            "무계획이 계획인 당신, 여행 중에도 순간순간 끌리는 곳으로 발걸음을 옮기게 돼요. 호기심이 많은 만큼 여행지에서 하고 싶은 것도 많을 거 같아요. 함께 여행하는 친구도 지치지 않는 체력을 소유자여야 해요.", 
            "그리고 혼자 가는 여행이라도 걱정하지 말아요! 특유의 활발함으로 여행지에서도 새로운 친구들을 사귈 수 있을 거에요."
        ],
        location:"스페인 바로셀로나",
        loca_img:"./img/result/16rabbit_ESFP/resultPage_landscape16_ESFP.png",
        contents:[
            "피카소의 작품, 가우디의 건축물, 플라멩고까지 볼거리가 가득한 스페인 바르셀로나의 매력에 분명 빠지실거에요. 도시 곳곳에 예술 작품이 있는 바르셀로나에서 호기심을 한껏 부풀려보자구요 :) 도시의 예술작품들을 즐겼다면, 식문화를 즐기러 가 볼까요?",
            "와인에 곁들여 먹는 다양한 안주들, 타파스를 꼭 먹어보아야 한답니다! 신시가지와 구시가지를 돌아다니며 유명한 타파스 바를 투어해보세요! 한국인 입맛에 딱 맞는 퀴멧 앤 퀴멧과 비니투스를 추천해요! 새로운 사람들과 함께 람블라 거리에서 식사를 하고, 샹그리아 한잔을 즐기세요!",
            "독야청청 독수리 선생님과 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"독야청청 독수리 선생님",
        partner_img:"./img/result/5eagle_ISTJ/resultPage_character5_ISTJ.png"
    },
    INTP:{
        //지유
        board_img:"./img/result/13cat_INTP/resultPage_board13_INTP.png",
        summary:"당신은 몽골을 여행하고 있는 고독한 고양이입니다.",
        nickname:"고독한 고양이",
        character_img:"./img/result/13cat_INTP/resultPage_character13_INTP.png",
        character:[
            "무언가에 몰두해 있는 시간이 많은 만큼 혼자하는 여행이라도 외롭지 않아요. 오히려 사색에 빠져 시간가는 줄 모를 거예요. 새로운 곳에서 새로운 사람들을 만나는 것을 선호하는 편은 아니군요.", 
            "하지만 우연히 만난 사람이 관심사가 똑같다면, 금방 친해져 대화에 푹 빠져 심심함을 느낄 틈이 없기도 한답니다 !"
        ],
        location:"몽골",
        loca_img:"./img/result/13cat_INTP/resultPage_landscape13_INTP.png",
        contents:[
            "약 4시간의 비행이면 도착할 수 있는 가까운 나라, 몽골에서 별이 쏟아지는 밤하늘에 푹 빠져보세요! 집요하게 파고드는 성격인 만큼 복잡한 생각을 정리하는 시간이 필요한 당신에게 딱이에요. 고비사막과 초원 한가운데 누워 은하수가 가져다 주는 고요함을 즐겨보세요!",
            "수도 울란바토르에서 시작해서 칭기스칸의 발자취를 따라 몽골의 역사를 탐방해보세요! 또, 테를지 국립공원에서 드넓은 초원, 그 위를 달리는 말과 군데군데 세워진 전통가옥 게르까지 천년이 넘도록 이어진 유목민만의 전통 생활방식을 경험할 수 있어요.",
            "어디서나 사람들을 이끄는 흰수염고래와 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"어디서나 사람들을 이끄는 흰수염고래",
        partner_img:"./img/result/12whale_ENTJ/resultPage_character12_ENTJ.png"
    },
    ENFJ:{
        //주훈
        board_img:"./img/result/1bear_ENFJ/resultPage_board1_ENFJ.png",
        summary:"당신은 이탈리아 로마를 여행하고 있는 포옹을 좋아하는 반달가슴곰입니다.",
        nickname:"포옹을 좋아하는 반달가슴곰",
        character_img:"./img/result/1bear_ENFJ/resultPage_character1_ENFJ.png",
        character:[
            "당신은 소중한 사람들과 소중한 시간을 함께 보내는 여행을 좋아하시군요. 또한 계획을 열심히 짜고 그 계획을 좋아하고 지지해주는 친구와 함께하면 여행의 피로는 저 멀리 사라지는 편이시겠네요.", 
            "친구들과 갈등을 피하기 위해 노력을 많이 하고, 남들이 즐거워하는 지 계속 생각하는 시간도 많아요. 충분히 멋지지만 가끔은 본인이 하고 싶은 것을 해보는 것도 중요해요 !"
        ],
        location:"이탈리아 로마",
        loca_img:"./img/result/1bear_ENFJ/resultPage_landscape1_ENFJ.png",
        contents:[
            "고대 로마의 역사와 건축물들이 살아숨쉬는 이탈리아 로마로의 여행을 추천해요. 유명한 박물관, 미술관, 성당과 다양한 나라의 수많은 사람을 만날 기회가 넘치기에, 사람을 좋아하는 당신이 푹 빠질만한 도시에요. 단, 소매치기를 조심 또 조심!!",
            "사실 로마에는 관광할 만한 장소가 셀 수 없어요! 콜로세움, 트레비 분수, 판테온 신전 같은 건축물부터 시작해서, 세계에서 가장 큰 박물관 중 하나인 바티칸 미술관, 그리고 수많은 성당 건물도 있으니, 유럽을 온 몸으로 느끼고 올 수 있어요.",
            "꿈꾸는 연약한 아기고양이와 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"꿈꾸는 연약한 아기고양이",
        partner_img:"./img/result/7pussycat_INFP/resultPage_character7_INFP.png"
    },
    INTJ:{
        //주훈
        board_img:"./img/result/2snake_INTJ/resultPage_board2_INTJ.png",
        summary:"당신은 미국 캘리포니아를 여행하고 있는 공학을 공부하는 방울뱀입니다.",
        nickname:"공학을 공부하는 방울뱀",
        character_img:"./img/result/2snake_INTJ/resultPage_character2_INTJ.png",
        character:[
            "당신은 독립심이 강하고 목표지향적인 사람이기에 여행에서도 효율적인 것은 빼놓을 수 없는 부분이에요. 관심 있는 것에는 몰두하지만, 그 밖에 것에는 흥미가 생기지 않기에, 본인이 선택한 여행 계획대로 흘러가는 것이 편할 거에요.", 
            "사실은 계획이 틀어지는 것을 싫어하는 것이지요. 혼자 캐리하는 경향이 있는데, 조용히 잘 서포트해주는 친구와 함께 한다면 색다르고 좋은 여행이 될거에요."
        ],
        location:"미국 캘리포니아",
        loca_img:"./img/result/2snake_INTJ/resultPage_landscape2_INTJ.png",
        contents:[
            "미국 서부에 있는 캘리포니아주는 로스엔젤레스, 샌프란시스코 등 유명 도시가 속해 있는 주에요. 다양한 컨셉을 가지고 계획을 세울 수 있는 곳이기에 당신이 좋아할 만한 도시에요.",
            "샌프란시스코를 가게 된다면, 골든 게이트 브릿지(금문교)와 인근의 쇼핑거리인 피어39는 꼭 추천드려요 ! 로스엔젤레스에 간다면 한인타운도 갈 수 있고, 할리우드 거리, 유니버설 스튜디오 할리우드, 디즈니랜드 등 여러 랜드마크가 있기에 어디를 여행하더라도 성공적인 여행을 즐기실 수 있어요!",
            "매 순간 최선의 결정을 내리는 사자와 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"매 순간 최선의 결정을 내리는 사자",
        partner_img:"./img/result/10lion_ENTP/resultPage_character10_ENTP.png"
    },
    ESTP:{
        //주훈
        board_img:"./img/result/3chihuahua_ESTP/resultPage_board3_ESTP.png",
        summary:"당신은 시베리아 횡단열차를 타고하고 있는 이곳저곳 둘러보는 치와와입니다.",
        nickname:"이곳저곳 둘러보는 치와와",
        character_img:"./img/result/3chihuahua_ESTP/resultPage_character3_ESTP.png",
        character:[
            "열린 마음을 가졌기에 고민하는 것보다 마음이 이끄는 대로 행동하는 것을 즐기는 편이시네요. 또한 사람을 좋아해 처음 만난 사람들과도 비교적 빨리 친해지는 성격이기에, 매력적인 사람을 많이 만날 수 있는 여행지가 어울려요.",
            "꼼꼼하게 챙겨줄 수 있는 친구와 함께 한다면 더욱 편안한 여행을 할 수 있을거에요."
        ],
        location:"러시아 시베리아",
        loca_img:"./img/result/3chihuahua_ESTP/resultPage_landscape3_ESTP.png",
        contents:[
            "시베리아 횡단열차, 여러가지를 경험하고 구경하는 것을 즐기는 당신에게 제격이에요. 오랜 시간 한 기차에 머물기도 하지만 블라디보스토크, 모스코바, 하바롭스크, 이르쿠츠크 등 러시아 여러 도시들을 모두 경험할 수 있어요. 이르쿠츠크에 있는 바이칼 호는 꼭 가보는 것을 추천합니다!",
            "횡단열차에서 바라보는 설경의 감동은 쉽게 표현하기 어렵다고 하죠. 같이 여행하는 다양한 국적의 사람들과도 친해질 수 있답니다. 기차를 타고 다니며 여러 도시들에서 러시아의 문화와 아름다움을 오감으로 느낄 수 있어요.",
            "듬직한 서포터 코뿔소와 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"듬직한 서포터 코뿔소",
        partner_img:"./img/result/9rhino_ISFJ/resultPage_character9_ISFJ.png"
    },
    ESTJ:{
        //준희
        board_img:"./img/result/4owl_ESTJ/resultPage_board4_ESTJ.png",
        summary:"당신은 그리스를 여행하고 있는 안경 쓴 부엉이 박사입니다.",
        nickname:"안경 쓴 부엉이 박사",
        character_img:"./img/result/4owl_ESTJ/resultPage_character4_ESTJ.png",
        character:[
            "당신은 계획적인 여행을 좋아하는 군요. 특히, 똑부러지게 짜놓은 계획을 어기는 것을 참을 수가 없어요. 시간 약속을 했는데 지키지 않는 동행자가 있으면 돌아버려요.", 
            "그렇다면 동행자들이 시간에 맞춰 움직이는 패키지 여행은 어떨까요? 당신이 원하는 유적지 코스와 계획적인 여행을 모두 얻을 수 있을 거에요 !"
        ],
        location:"그리스",
        loca_img:"./img/result/4owl_ESTJ/resultPage_landscape4_ESTJ.png",
        contents:[
            "많은 고대 유적을 가지고 있고, 현대를 지탱하는 가치들이 기원한 장소인 그리스의 웅장함을 느껴보세요! 당신이 중요하게 생각하는 법과 사회 그리고 질서의 시작점인 그리스를 사랑할 수 밖에 없을거에요! 대표적인 유적인 파르테논 신전에서 건축과 역사에 관련된 설명을 들어봅시다!",
            "그리스의 여러 신전들만 보아도 웅장한 역사를 느낄 수 있겠지만, 아크로폴리스 박물관에 가보는 건 어떨까요? 현장에서 발견된 문화재들을 통해 그리스를 오감으로 느낄 수 있을 거에요 ! 모든 투어가 끝나고 신타그마 광장의 야경을 보거나, 에르무 거리에 가서 번화가를 즐겨보아도 좋아요 :)",
            "반전 매력을 소유한 여우와 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요!"
        ],
        partner:"반전 매력을 소유한 여우",
        partner_img:"./img/result/11redfox_ISTP/resultPage_character11_ISTP.png"
    },
    ISTJ:{
        //준희
        board_img:"./img/result/5eagle_ISTJ/resultPage_board5_ISTJ.png",
        summary:"당신은 싱가포르를 여행하고 있는 독야청청 독수리 선생님입니다.",
        nickname:"독야청청 독수리 선생님",
        character_img:"./img/result/5eagle_ISTJ/resultPage_character5_ISTJ.png",
        character:[
            "당신은 다른 사람들이랑 일하는 것을 어려워해요. 만약 내 팀원이 답답하게 일하면 조용히 뒷목 잡으면서 차라리 그 사람 몫까지 내가 다 해버리고 싶어져요.",
            "그런데 또 계획적인 성격이라 여행 계획을 짜는 것부터 피곤하네요. 시간이 부족한데 결정 내리지 못하고 질질 끄는 상황을 못견디겠어요. 당신의 의견을 잘 들어주고, 따라주는 사람과 함께 하면 좋은 여행을 즐길 수 있을 거에요 !"
        ],
        location:"싱가포르",
        loca_img:"./img/result/5eagle_ISTJ/resultPage_landscape5_ISTJ.png",
        contents:[
            "교통, 먹거리, 치안 등이 완벽해 혼자하는 여행도 문제없는 싱가포르가 어울려요! 당신은 다른 사람의 일에 관심을 갖는게 귀찮고, 내 얘기를 다른 사람한테 하는 것도 그닥이에요. 그렇다면 혼자 있어도 즐거운 싱가포르의 다양한 야시장에 들러보시는건 어떤가요?",
            "다양한 길거리 음식이 있는 차이나타운 스트리트 마켓에서 외롭지 않고 즐거운 저녁 시간을 가져보아요 ! 또, 싱가포르 하면 야경을 빼놓을 수 없죠. 정말 많은 야경 명소 중에 클락키 야경 명소를 추천해요. 강변에 노천 카페와 펍들이 주를 이루고 있어서 늦은 밤에도 사람들이 붐빈답니다! 맛있는 음식은 기본이죠 !",
            "들판을 누비는 토끼와 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요 !"
        ],
        partner:"들판을 누비는 토끼",
        partner_img:"./img/result/16rabbit_ESFP/resultPage_character16_ESFP.png"
    },
    ESFJ:{
        //준희
        board_img:"./img/result/6squirrel_ESFJ/resultPage_board6_ESFJ.png",
        summary:"당신은 코타키나발루를 여행하고 있는 발빠른 다람쥐입니다.",
        nickname:"발빠른 다람쥐",
        character_img:"./img/result/6squirrel_ESFJ/resultPage_character6_ESFJ.png",
        character:[
            "당신은 친구들 사이에서 인기쟁군요! 분위기를 타고 사람들이 자신에게 집중하도록 하는 재능이 있어요. 인싸로 등극해서 첫째날에 번호교환까지 모두 완료할 당신! 자칫하면 어색하기만한 패키지 여행도 게스트 하우스도 즐거운 여행으로 만들 수 있겠네요.",
            "여러 사람들과 함께 하는 여행은 서로에 대한 배려와 도움의 손길이 가장 중요해요. 다른 사람들을 진지한 마음으로 돕는 당신은 이런 여행에 찰떡이네요 !"
        ],
        location:"코타키나발루",
        loca_img:"./img/result/6squirrel_ESFJ/resultPage_landscape6_ESFJ.png",
        contents:[
            "많은 사람들과 아름다운 이야기를 하며 다양한 투어를 즐길 수 있는 코타키나발루를 추천해요. 당신은 유적지보다는 새로운 사람들과 어울리고 대화하기를 좋아해요. 코타키나발루는 다양한 언어와 다양한 문화를 갖는 사람들이 모여있어요 ! 각 문화의 아름다움에 대해 이야기 나누고 느껴보는 건 어떨까요?",
            "또, 스쿠버 다이빙, 일몰 투어, 반딧불 투어 등을 통해서 다양한 사람들과 만나고 대화할 수 있답니다. 또 카야 거리에 있는 카페, 레스토랑, 펍에만 들려보아도 충분할 거에요 :) 또 필리피노 마켓, 핸드메이드 마켓과 같은 야시장에 들려보는건 어떤가요? 각 나라의 문화가 그대로 깃들어 있는 음식들과 수공예 작품들은 당신의 흥미를 불러일으키기에 부족함이 없을 거에요 !",
            "주변 풍경을 즐기는 양과 여행을 함께 한다면, 두 배로 즐겁고 편안한 여행을 할 수 있을 거에요 !"
        ],
        partner:"주변 풍경을 즐기는 양",
        partner_img:"./img/result/15sheep_ISFP/resultPage_character15_ISFP.png"
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
                    board.src=result_list.ISFP.board_img
                    summary.textContent=result_list.ISFP.summary
                    nick.textContent=result_list.ISFP.nickname
                    character.src=result_list.ISFP.character_img
                    travel_style_one.textContent=result_list.ISFP.character[0]
                    travel_style_two.textContent=result_list.ISFP.character[1]
                    loca.textContent=result_list.ISFP.location
                    landscape.src=result_list.ISFP.loca_img
                    loca_one.textContent=result_list.ISFP.contents[0]
                    loca_two.textContent=result_list.ISFP.contents[1]
                    partner_name.textContent=result_list.ISFP.partner
                    partner_img.src=result_list.ISFP.partner_img
                    partner_info.textContent=result_list.ISFP.contents[2]
                }
                else{
                    board.src=result_list.ISFJ.board_img
                    summary.textContent=result_list.ISFJ.summary
                    nick.textContent=result_list.ISFJ.nickname
                    character.src=result_list.ISFJ.character_img
                    travel_style_one.textContent=result_list.ISFJ.character[0]
                    travel_style_two.textContent=result_list.ISFJ.character[1]
                    loca.textContent=result_list.ISFJ.location
                    landscape.src=result_list.ISFJ.loca_img
                    loca_one.textContent=result_list.ISFJ.contents[0]
                    loca_two.textContent=result_list.ISFJ.contents[1]
                    partner_name.textContent=result_list.ISFJ.partner
                    partner_img.src=result_list.ISFJ.partner_img
                    partner_info.textContent=result_list.ISFJ.contents[2]
                }
            }
            else{
                //IST
                if(MBTI.P>MBTI.J){
                    board.src=result_list.ISTP.board_img
                    summary.textContent=result_list.ISTP.summary
                    nick.textContent=result_list.ISTP.nickname
                    character.src=result_list.ISTP.character_img
                    travel_style_one.textContent=result_list.ISTP.character[0]
                    travel_style_two.textContent=result_list.ISTP.character[1]
                    loca.textContent=result_list.ISTP.location
                    landscape.src=result_list.ISTP.loca_img
                    loca_one.textContent=result_list.ISTP.contents[0]
                    loca_two.textContent=result_list.ISTP.contents[1]
                    partner_name.textContent=result_list.ISTP.partner
                    partner_img.src=result_list.ISTP.partner_img
                    partner_info.textContent=result_list.ISTP.contents[2]
                }
                else{
                    board.src=result_list.ISTJ.board_img
                    summary.textContent=result_list.ISTJ.summary
                    nick.textContent=result_list.ISTJ.nickname
                    character.src=result_list.ISTJ.character_img
                    travel_style_one.textContent=result_list.ISTJ.character[0]
                    travel_style_two.textContent=result_list.ISTJ.character[1]
                    loca.textContent=result_list.ISTJ.location
                    landscape.src=result_list.ISTJ.loca_img
                    loca_one.textContent=result_list.ISTJ.contents[0]
                    loca_two.textContent=result_list.ISTJ.contents[1]
                    partner_name.textContent=result_list.ISTJ.partner
                    partner_img.src=result_list.ISTJ.partner_img
                    partner_info.textContent=result_list.ISTJ.contents[2]
                }
            }
        }
        else{
            //IN
            if(MBTI.F>MBTI.T){
                //INF
                if(MBTI.P>MBTI.J){
                    board.src=result_list.INFP.board_img
                    summary.textContent=result_list.INFP.summary
                    nick.textContent=result_list.INFP.nickname
                    character.src=result_list.INFP.character_img
                    travel_style_one.textContent=result_list.INFP.character[0]
                    travel_style_two.textContent=result_list.INFP.character[1]
                    loca.textContent=result_list.INFP.location
                    landscape.src=result_list.INFP.loca_img
                    loca_one.textContent=result_list.INFP.contents[0]
                    loca_two.textContent=result_list.INFP.contents[1]
                    partner_name.textContent=result_list.INFP.partner
                    partner_img.src=result_list.INFP.partner_img
                    partner_info.textContent=result_list.INFP.contents[2]
                }
                else{
                    board.src=result_list.INFJ.board_img
                    summary.textContent=result_list.INFJ.summary
                    nick.textContent=result_list.INFJ.nickname
                    character.src=result_list.INFJ.character_img
                    travel_style_one.textContent=result_list.INFJ.character[0]
                    travel_style_two.textContent=result_list.INFJ.character[1]
                    loca.textContent=result_list.INFJ.location
                    landscape.src=result_list.INFJ.loca_img
                    loca_one.textContent=result_list.INFJ.contents[0]
                    loca_two.textContent=result_list.INFJ.contents[1]
                    partner_name.textContent=result_list.INFJ.partner
                    partner_img.src=result_list.INFJ.partner_img
                    partner_info.textContent=result_list.INFJ.contents[2]
                }
            }
            else{
                //INT
                if(MBTI.P>MBTI.J){
                    board.src=result_list.INTP.board_img
                    summary.textContent=result_list.INTP.summary
                    nick.textContent=result_list.INTP.nickname
                    character.src=result_list.INTP.character_img
                    travel_style_one.textContent=result_list.INTP.character[0]
                    travel_style_two.textContent=result_list.INTP.character[1]
                    loca.textContent=result_list.INTP.location
                    landscape.src=result_list.INTP.loca_img
                    loca_one.textContent=result_list.INTP.contents[0]
                    loca_two.textContent=result_list.INTP.contents[1]
                    partner_name.textContent=result_list.INTP.partner
                    partner_img.src=result_list.INTP.partner_img
                    partner_info.textContent=result_list.INTP.contents[2]
                }
                else{
                    board.src=result_list.INTJ.board_img
                    summary.textContent=result_list.INTJ.summary
                    nick.textContent=result_list.INTJ.nickname
                    character.src=result_list.INTJ.character_img
                    travel_style_one.textContent=result_list.INTJ.character[0]
                    travel_style_two.textContent=result_list.INTJ.character[1]
                    loca.textContent=result_list.INTJ.location
                    landscape.src=result_list.INTJ.loca_img
                    loca_one.textContent=result_list.INTJ.contents[0]
                    loca_two.textContent=result_list.INTJ.contents[1]
                    partner_name.textContent=result_list.INTJ.partner
                    partner_img.src=result_list.INTJ.partner_img
                    partner_info.textContent=result_list.INTJ.contents[2]
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
                    board.src=result_list.ESFP.board_img
                    summary.textContent=result_list.ESFP.summary
                    nick.textContent=result_list.ESFP.nickname
                    character.src=result_list.ESFP.character_img
                    travel_style_one.textContent=result_list.ESFP.character[0]
                    travel_style_two.textContent=result_list.ESFP.character[1]
                    loca.textContent=result_list.ESFP.location
                    landscape.src=result_list.ESFP.loca_img
                    loca_one.textContent=result_list.ESFP.contents[0]
                    loca_two.textContent=result_list.ESFP.contents[1]
                    partner_name.textContent=result_list.ESFP.partner
                    partner_img.src=result_list.ESFP.partner_img
                    partner_info.textContent=result_list.ESFP.contents[2]
                }
                else{
                    board.src=result_list.ESFJ.board_img
                    summary.textContent=result_list.ESFJ.summary
                    nick.textContent=result_list.ESFJ.nickname
                    character.src=result_list.ESFJ.character_img
                    travel_style_one.textContent=result_list.ESFJ.character[0]
                    travel_style_two.textContent=result_list.ESFJ.character[1]
                    loca.textContent=result_list.ESFJ.location
                    landscape.src=result_list.ESFJ.loca_img
                    loca_one.textContent=result_list.ESFJ.contents[0]
                    loca_two.textContent=result_list.ESFJ.contents[1]
                    partner_name.textContent=result_list.ESFJ.partner
                    partner_img.src=result_list.ESFJ.partner_img
                    partner_info.textContent=result_list.ESFJ.contents[2]
                }
            }
            else{
                //EST
                if(MBTI.P>MBTI.J){
                    board.src=result_list.ESTP.board_img
                    summary.textContent=result_list.ESTP.summary
                    nick.textContent=result_list.ESTP.nickname
                    character.src=result_list.ESTP.character_img
                    travel_style_one.textContent=result_list.ESTP.character[0]
                    travel_style_two.textContent=result_list.ESTP.character[1]
                    loca.textContent=result_list.ESTP.location
                    landscape.src=result_list.ESTP.loca_img
                    loca_one.textContent=result_list.ESTP.contents[0]
                    loca_two.textContent=result_list.ESTP.contents[1]
                    partner_name.textContent=result_list.ESTP.partner
                    partner_img.src=result_list.ESTP.partner_img
                    partner_info.textContent=result_list.ESTP.contents[2]
                }
                else{
                    board.src=result_list.ESTJ.board_img
                    summary.textContent=result_list.ESTJ.summary
                    nick.textContent=result_list.ESTJ.nickname
                    character.src=result_list.ESTJ.character_img
                    travel_style_one.textContent=result_list.ESTJ.character[0]
                    travel_style_two.textContent=result_list.ESTJ.character[1]
                    loca.textContent=result_list.ESTJ.location
                    landscape.src=result_list.ESTJ.loca_img
                    loca_one.textContent=result_list.ESTJ.contents[0]
                    loca_two.textContent=result_list.ESTJ.contents[1]
                    partner_name.textContent=result_list.ESTJ.partner
                    partner_img.src=result_list.ESTJ.partner_img
                    partner_info.textContent=result_list.ESTJ.contents[2]
                }
            }
        }
        else{
            //EN
            if(MBTI.F>MBTI.T){
                //ENF
                if(MBTI.P>MBTI.J){
                    board.src=result_list.ENFP.board_img
                    summary.textContent=result_list.ENFP.summary
                    nick.textContent=result_list.ENFP.nickname
                    character.src=result_list.ENFP.character_img
                    travel_style_one.textContent=result_list.ENFP.character[0]
                    travel_style_two.textContent=result_list.ENFP.character[1]
                    loca.textContent=result_list.ENFP.location
                    landscape.src=result_list.ENFP.loca_img
                    loca_one.textContent=result_list.ENFP.contents[0]
                    loca_two.textContent=result_list.ENFP.contents[1]
                    partner_name.textContent=result_list.ENFP.partner
                    partner_img.src=result_list.ENFP.partner_img
                    partner_info.textContent=result_list.ENFP.contents[2]
                }
                else{
                    board.src=result_list.ENFJ.board_img
                    summary.textContent=result_list.ENFJ.summary
                    nick.textContent=result_list.ENFJ.nickname
                    character.src=result_list.ENFJ.character_img
                    travel_style_one.textContent=result_list.ENFJ.character[0]
                    travel_style_two.textContent=result_list.ENFJ.character[1]
                    loca.textContent=result_list.ENFJ.location
                    landscape.src=result_list.ENFJ.loca_img
                    loca_one.textContent=result_list.ENFJ.contents[0]
                    loca_two.textContent=result_list.ENFJ.contents[1]
                    partner_name.textContent=result_list.ENFJ.partner
                    partner_img.src=result_list.ENFJ.partner_img
                    partner_info.textContent=result_list.ENFJ.contents[2]
                }
            }
            else{
                //ENT
                if(MBTI.P>MBTI.J){
                    board.src=result_list.ENTP.board_img
                    summary.textContent=result_list.ENTP.summary
                    nick.textContent=result_list.ENTP.nickname
                    character.src=result_list.ENTP.character_img
                    travel_style_one.textContent=result_list.ENTP.character[0]
                    travel_style_two.textContent=result_list.ENTP.character[1]
                    loca.textContent=result_list.ENTP.location
                    landscape.src=result_list.ENTP.loca_img
                    loca_one.textContent=result_list.ENTP.contents[0]
                    loca_two.textContent=result_list.ENTP.contents[1]
                    partner_name.textContent=result_list.ENTP.partner
                    partner_img.src=result_list.ENTP.partner_img
                    partner_info.textContent=result_list.ENTP.contents[2]
                }
                else{
                    board.src=result_list.ENTJ.board_img
                    summary.textContent=result_list.ENTJ.summary
                    nick.textContent=result_list.ENTJ.nickname
                    character.src=result_list.ENTJ.character_img
                    travel_style_one.textContent=result_list.ENTJ.character[0]
                    travel_style_two.textContent=result_list.ENTJ.character[1]
                    loca.textContent=result_list.ENTJ.location
                    landscape.src=result_list.ENTJ.loca_img
                    loca_one.textContent=result_list.ENTJ.contents[0]
                    loca_two.textContent=result_list.ENTJ.contents[1]
                    partner_name.textContent=result_list.ENTJ.partner
                    partner_img.src=result_list.ENTJ.partner_img
                    partner_info.textContent=result_list.ENTJ.contents[2]
                }
            }
        }
    }
}

var load;

function loadTime(){
    load=setTimeout(function(){
        loading.style.display='none';
    },2500);
    
}
function goToResult(){
    getMBTI()
    qna_content.style.display='none'
    loading.style.visibility='visible';
    loadTime();

    var result;
    result=setTimeout(function(){
        result_content.style.visibility='visible';
    },2500);
}


function AddI(){
    //ISTP
    if(MBTI.Qnum==1){
        //SN
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q2
        one.src=answer_list.q2.a1
        two.src=answer_list.q2.a2
        gauge.src=gauge_list.q2
    }else if(MBTI.Qnum==2){
        //IE
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q3
        one.src=answer_list.q3.a1
        two.src=answer_list.q3.a2
        gauge.src=gauge_list.q3
    }
    else if(MBTI.Qnum==3){
        //PJ
        MBTI.P++
        MBTI.Qnum++
        ques.textContent=question_list.q4
        one.src=answer_list.q4.a1
        two.src=answer_list.q4.a2
        gauge.src=gauge_list.q4
    }
    else if(MBTI.Qnum==4){
        //TF
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q5
        one.src=answer_list.q5.a1
        two.src=answer_list.q5.a2
        gauge.src=gauge_list.q5
    }
    else if(MBTI.Qnum==5){
        //IE
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q6
        one.src=answer_list.q6.a1
        two.src=answer_list.q6.a2
        gauge.src=gauge_list.q6
    }
    else if(MBTI.Qnum==6){
        //SN
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q7
        one.src=answer_list.q7.a1
        two.src=answer_list.q7.a2
        gauge.src=gauge_list.q7
    }else if(MBTI.Qnum==7){
        //IE
        MBTI.E++
        MBTI.Qnum++
        ques.textContent=question_list.q8
        one.src=answer_list.q8.a1
        two.src=answer_list.q8.a2
        gauge.src=gauge_list.q8
    }
    else if(MBTI.Qnum==8){
        //TF
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q9
        one.src=answer_list.q9.a1
        two.src=answer_list.q9.a2
        gauge.src=gauge_list.q9
    }
    else if(MBTI.Qnum==9){
        //SN
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q10
        one.src=answer_list.q10.a1
        two.src=answer_list.q10.a2
        gauge.src=gauge_list.q10
        //T and F
    }else if(MBTI.Qnum==10){
        //TF
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q11
        one.src=answer_list.q11.a1
        two.src=answer_list.q11.a2
        gauge.src=gauge_list.q11
    }
    else if(MBTI.Qnum==11){
        //PJ
        MBTI.P++
        MBTI.Qnum++
        ques.textContent=question_list.q12
        one.src=answer_list.q12.a1
        two.src=answer_list.q12.a2
        gauge.src=gauge_list.q12
    }
    else if(MBTI.Qnum==12){
        //PJ
        MBTI.J+=1.5
        MBTI.Qnum++
        goToResult()
        //결과 화면으로 
    }
    //alert('E: '+MBTI.E+', I: '+MBTI.I+', S: '+MBTI.S+', N: '+MBTI.N+', T: '+MBTI.T+', F: '+MBTI.F+', P: '+MBTI.P+', J: '+MBTI.J+', Qnum is '+MBTI.Qnum)
}

function AddE(){
    if(MBTI.Qnum==1){
        //SN
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q2
        one.src=answer_list.q2.a1
        two.src=answer_list.q2.a2
        gauge.src=gauge_list.q2
    }else if(MBTI.Qnum==2){
        //IE
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q3
        one.src=answer_list.q3.a1
        two.src=answer_list.q3.a2
        gauge.src=gauge_list.q3
    }
    else if(MBTI.Qnum==3){
        //PJ
        MBTI.J++
        MBTI.Qnum++
        ques.textContent=question_list.q4
        one.src=answer_list.q4.a1
        two.src=answer_list.q4.a2
        gauge.src=gauge_list.q4
    }
    else if(MBTI.Qnum==4){
        //TF
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q5
        one.src=answer_list.q5.a1
        two.src=answer_list.q5.a2
        gauge.src=gauge_list.q5
    }
    else if(MBTI.Qnum==5){
        //IE
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q6
        one.src=answer_list.q6.a1
        two.src=answer_list.q6.a2
        gauge.src=gauge_list.q6
    }
    else if(MBTI.Qnum==6){
        //SN
        MBTI.S++
        MBTI.Qnum++
        ques.textContent=question_list.q7
        one.src=answer_list.q7.a1
        two.src=answer_list.q7.a2
        gauge.src=gauge_list.q7
    }else if(MBTI.Qnum==7){
        //IE
        MBTI.I++
        MBTI.Qnum++
        ques.textContent=question_list.q8
        one.src=answer_list.q8.a1
        two.src=answer_list.q8.a2
        gauge.src=gauge_list.q8
    }
    else if(MBTI.Qnum==8){
        //TF
        MBTI.T++
        MBTI.Qnum++
        ques.textContent=question_list.q9
        one.src=answer_list.q9.a1
        two.src=answer_list.q9.a2
        gauge.src=gauge_list.q9
    }
    else if(MBTI.Qnum==9){
        //SN
        MBTI.N++
        MBTI.Qnum++
        ques.textContent=question_list.q10
        one.src=answer_list.q10.a1
        two.src=answer_list.q10.a2
        gauge.src=gauge_list.q10
    }else if(MBTI.Qnum==10){
        //TF
        MBTI.F++
        MBTI.Qnum++
        ques.textContent=question_list.q11
        one.src=answer_list.q11.a1
        two.src=answer_list.q11.a2
        gauge.src=gauge_list.q11
    }
    else if(MBTI.Qnum==11){
        //PJ
        MBTI.J++
        MBTI.Qnum++
        ques.textContent=question_list.q12
        one.src=answer_list.q12.a1
        two.src=answer_list.q12.a2
        gauge.src=gauge_list.q12
    }
    else if(MBTI.Qnum==12){
        //PJ
        MBTI.P++
        MBTI.Qnum++
        goToResult()
        //결과 화면으로 
    }
    //alert('E: '+MBTI.E+', I: '+MBTI.I+', S: '+MBTI.S+', N: '+MBTI.N+', T: '+MBTI.T+', F: '+MBTI.F+', P: '+MBTI.P+', J: '+MBTI.J+', Qnum is '+MBTI.Qnum)
}
