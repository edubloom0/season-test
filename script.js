
        const startScreen = document.getElementById('start-screen');
        const questionScreen = document.getElementById('question-screen');
        const resultScreen = document.getElementById('result-screen');
        const startBtn = document.getElementById('start-btn');

        const progressBar = document.getElementById('progress');
        const pageNumber = document.getElementById('page-number');
        const questionText = document.getElementById('question-text');
        const answerButtons = document.getElementById('answer-buttons');

        const questions = [
            { question: "Q1. 혼자 있는 주말 나는 보통…", answers: ["잔잔한 음악과 차 한 잔으로 위로를 받는다", "새로운 사람을 만나 에너지를 얻는다", "읽고 싶은 책이나 자료를 정리하며 보낸다", "밀린 일이나 집안일을 계획적으로 처리한다"], types: ["autumn", "spring", "winter", "winter"] },
            { question: "Q2. 친구가 고민을 털어놓을 때, 나는…", answers: ["말보다 마음을 먼저 공감해준다", "기분 전환을 위해 함께 외출을 제안한다", "조용히 들어주고 한참 뒤에 조언을 건넨다", "객관적인 조언을 해주며 현실을 짚어준다"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q3. 따뜻한 봄날 가장 끌리는 활동은?", answers: ["카페 창가에서 글을 쓰거나 노트에 기록하기", "여행 가서 사람들과 어울리기", "자연 속 산책하며 깊은 생각에 잠기기", "정원 가꾸며 하루 계획 세우기"], types: ["autumn", "spring", "autumn", "winter"] },
            { question: "Q4. 감정이 북받칠 때 나는…", answers: ["마음이 느껴지는 노래를 반복해서 듣는다", "사람을 만나 웃고 넘기려 한다", "조용한 곳에서 내면을 정리한다", "감정을 표출하지 않도록 억제하려 한다"], types: ["autumn", "spring", "autumn", "winter"] },
            { question: "Q5. 나에게 위로가 되는 순간은…", answers: ["누군가 진심으로 내 마음을 알아줄 때", "함께 웃고 떠드는 사람들과의 시간", "혼자만의 시간 속에서 깨달음을 얻을 때", "현실적인 조언이나 대안을 찾았을 때"], types: ["spring", "spring", "autumn", "winter"] },
            { question: "Q6. 감정을 표현할 때 나는…", answers: ["눈빛과 표정으로 자연스럽게 표현된다", "감정에 솔직하게 말로 표현한다", "내면에 쌓아두고 나중에 꺼내본다", "감정보다 이성이 먼저 작동된다"], types: ["spring", "spring", "autumn", "winter"] },
            { question: "Q7. 낯선 경험을 대할 때 나는…", answers: ["일단 부딪혀보며 익숙해진다", "새로운 감각을 즐기되 신중히 접근한다", "내부적으로 의미를 먼저 분석해본다", "가능성과 위험 요소를 미리 따져본다"], types: ["summer", "spring", "winter", "winter"] },
            { question: "Q8. 여행 중 가장 기대되는 순간은?", answers: ["현지 사람들과 어울리는 즉흥적 만남", "새로운 풍경을 직접 마주하는 순간", "감정이 울리는 장소에서의 고요한 시간", "계획대로 일정이 흘러갈 때의 안정감"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q9. 나의 관심은 대체로…", answers: ["새로운 사람, 새로운 이야기", "변화무쌍한 트렌드나 감각적 경험", "철학적 주제나 내면의 통찰", "실용적 정보나 분석 가능한 구조"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q10. 주말을 보내는 나만의 방식은…", answers: ["친구들과 즉흥적으로 약속을 잡는다", "하고 싶은 것을 그날의 기분에 따라 고른다", "조용한 장소에서 생각을 정리한다", "계획한 루틴에 맞춰 하루를 쪼갠다"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q11. 오래 기억에 남는 장소는 어떤 곳인가요?", answers: ["함께 웃던 사람들의 소리가 머문 곳", "처음 보는 풍경에 놀라움을 느꼈던 곳", "마음 깊은 울림이 있었던 조용한 장소", "계획대로 잘 흘러간 여행지의 깔끔한 기억"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q12. 나를 가장 성장하게 한 경험은…", answers: ["사람과의 깊은 감정 교류", "새로운 도전과 활동", "스스로를 돌아본 내적 성찰", "체계적 훈련과 명확한 피드백"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q13. 조용한 산책길을 걸을 때 나는…", answers: ["함께 걷는 이의 기분을 느낀다", "풍경을 보며 사진 찍을 생각을 한다", "생각의 가지를 뻗으며 상상의 세계로 간다", "걷는 거리나 소요 시간을 의식하며 균형을 잡는다"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q14. 어떤 이야기에서 마음이 움직이나요?", answers: ["따뜻한 위로가 담긴 에피소드", "영화처럼 생생한 경험담", "삶에 대한 철학과 사유가 담긴 이야기", "구체적인 팁과 전략이 있는 이야기"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q15. 예상치 못한 상황이 생기면 나는…", answers: ["감정을 나눌 사람을 먼저 찾는다", "일단 행동하며 돌파구를 찾는다", "왜 이런 일이 생겼는지 분석해본다", "가능한 선택지를 정리하고 우선순위를 매긴다"], types: ["spring", "summer", "autumn", "winter"] },
            { question: "Q16. 중요한 결정을 앞두고 나는…", answers: ["마음이 이끄는 쪽을 선택한다", "주변 반응과 상황을 두루 고려한다", "조용히 숙고하며 직감을 따른다", "장단점을 리스트로 정리하고 비교한다"], types: ["spring", "summer", "autumn", "winter"] }
        ];

        let currentQuestionIndex = 0;
        const scores = {
            spring: 0,
            summer: 0,
            autumn: 0,
            winter: 0
        };

        startBtn.addEventListener('click', startQuiz);

        function startQuiz() {
            startScreen.classList.add('hidden');
            questionScreen.classList.remove('hidden');
            showQuestion();
        }

        function showQuestion() {
            const currentQuestion = questions[currentQuestionIndex];
            
            // Update progress
            const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
            progressBar.style.width = `${progressPercentage}%`;
            pageNumber.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;

            questionText.textContent = currentQuestion.question;
            answerButtons.innerHTML = '';

            currentQuestion.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.classList.add('btn');
                button.textContent = ` ${answer}`;
                button.addEventListener('click', () => selectAnswer(index));
                answerButtons.appendChild(button);
            });
        }

        function selectAnswer(index) {
            const type = questions[currentQuestionIndex].types[index];
            scores[type]++;
            
            currentQuestionIndex++;

            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                showResult();
            }
        }

        function showResult() {
            questionScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');

            let maxScore = -1;
            let resultType = '';

            for (const season in scores) {
                if (scores[season] > maxScore) {
                    maxScore = scores[season];
                    resultType = season;
                }
            }
            
            // In case of a tie, prioritize Spring > Summer > Autumn > Winter
            if (scores.spring === maxScore) resultType = 'spring';
            else if (scores.summer === maxScore) resultType = 'summer';
            else if (scores.autumn === maxScore) resultType = 'autumn';
            else if (scores.winter === maxScore) resultType = 'winter';


            document.getElementById(`${resultType}-result`).classList.remove('hidden');
        }
    