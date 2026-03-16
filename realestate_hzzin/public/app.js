// ════════════════════════════════════════
// 이부진 — 이걸로 부동산 공부하는 혜진
// ════════════════════════════════════════

// ── CURRICULUM DATA ──
const CURRICULUM = [
  // 1주차
  { day:1, week:1, title:'매매·전세·월세·반전세 차이', desc:'거래 방식 4가지, 전세 리스크, 한국 고유 제도 이해', tag:'w1',
    studyContent: `<h3>1. 매매</h3>
부동산 소유권을 완전히 취득하는 거래예요. 집값 전액을 지불하거나 대출을 활용해요.
<ul>
<li><strong>장점:</strong> 내 집 마련, 시세차익 가능, 자산 증식</li>
<li><strong>단점:</strong> 큰 초기 자금 필요, 집값 하락 리스크</li>
</ul>

<h3>2. 전세</h3>
목돈(보증금)을 집주인에게 맡기고 <strong>월 임차료 없이</strong> 거주하는 한국 고유 제도예요.
<ul>
<li><strong>장점:</strong> 월세 부담 없음, 보증금 전액 반환(원칙)</li>
<li><strong>단점:</strong> 큰 보증금 필요, <strong>전세 사기 리스크</strong>(깡통전세, 역전세)</li>
<li><strong>전세 리스크:</strong> 집값이 전세가보다 낮아지면 보증금 반환이 어려워져요</li>
</ul>

<h3>3. 월세</h3>
매달 임차료를 내는 방식이에요. 보증금은 소액이에요.
<ul>
<li><strong>장점:</strong> 적은 초기 비용, 유동적</li>
<li><strong>단점:</strong> 매달 고정 지출, 자산 형성 안 됨</li>
</ul>

<h3>4. 반전세</h3>
전세보증금 일부를 월세로 전환한 <strong>혼합 방식</strong>이에요.
<ul>
<li>예: 전세 3억 → 보증금 1.5억 + 월세 50만원</li>
<li>금리 상승기에 전세에서 반전세로 전환하는 경우가 많아요</li>
</ul>

<h3>핵심 포인트</h3>
<ul>
<li>전세는 세계적으로 한국에만 있는 제도</li>
<li>2026년 현재, 전세 보증보험(HUG, SGI) 가입이 필수!</li>
<li>계약 전 등기부등본 확인은 기본 중의 기본</li>
</ul>`,
    summaryTerms:[
      {name:'매매', desc:'부동산 소유권을 완전히 취득하는 거래. 집값 전액 지불 또는 대출 활용.'},
      {name:'전세', desc:'목돈(보증금)을 집주인에게 맡기고 월 임차료 없이 거주. 계약 종료 시 전액 반환. 한국 고유 제도.'},
      {name:'월세', desc:'매달 임차료를 내는 방식. 보증금은 소액.'},
      {name:'반전세', desc:'전세보증금 일부를 월세로 전환한 혼합 방식.'}
    ]
  },
  { day:2, week:1, title:'등기부등본 읽는 법', desc:'갑구·을구, 근저당·압류, 계약 전 필수 확인 사항', tag:'w1',
    studyContent: `<h3>등기부등본이란?</h3>
부동산의 <strong>주민등록증</strong>이에요. 소유자, 권리관계가 전부 기재되어 있어요.
<strong>인터넷등기소(iros.go.kr)</strong>에서 700원이면 열람할 수 있어요.

<h3>표제부</h3>
부동산의 기본 정보(소재지, 면적, 구조 등)가 기재돼요.

<h3>갑구 — 소유권</h3>
<ul>
<li><strong>현재 소유자</strong>가 누구인지 확인</li>
<li><strong>가압류:</strong> 채무 관련 법적 조치. 있으면 위험!</li>
<li><strong>압류:</strong> 세금 미납 등으로 강제 처분 가능</li>
<li><strong>가등기:</strong> 소유권 이전 예약. 있으면 주의</li>
</ul>

<h3>을구 — 소유권 외 권리</h3>
<ul>
<li><strong>근저당:</strong> 집을 담보로 대출받은 금액. 채권최고액으로 표시</li>
<li><strong>전세권:</strong> 전세 계약이 등기된 것</li>
<li>근저당 금액이 크면 → 집주인 부채가 많다는 의미</li>
</ul>

<h3>계약 전 체크리스트</h3>
<ul>
<li>갑구: 소유자와 계약자가 동일인인지</li>
<li>갑구: 가압류, 압류, 가등기 없는지</li>
<li>을구: 근저당 설정액이 집값 대비 너무 높지 않은지</li>
<li>매매가 < (근저당 + 전세금) 이면 <strong>깡통전세</strong> 위험!</li>
</ul>`,
    summaryTerms:[
      {name:'등기부등본', desc:'부동산의 주민등록증. 소유자·권리관계 전부 기재. 인터넷등기소(iros.go.kr)에서 700원.'},
      {name:'갑구', desc:'소유권 관련 사항. 누가 주인인지, 가압류 여부.'},
      {name:'을구', desc:'소유권 외 권리. 근저당·전세권 등 돈 관련.'},
      {name:'근저당', desc:'집을 담보로 대출받은 금액. 을구에 표시. 매수 전 반드시 확인.'}
    ]
  },
  { day:3, week:1, title:'LTV · DTI · DSR — 대출 3형제', desc:'대출 한도 결정 규제, 실제 계산 예시', tag:'w1',
    studyContent: `<h3>LTV (Loan To Value, 담보인정비율)</h3>
<strong>집값 대비 대출 한도</strong> 비율이에요.
<ul>
<li>LTV 70% → 5억 집에 최대 <strong>3.5억</strong> 대출 가능</li>
<li>규제지역에서는 LTV가 40~50%로 낮아져요</li>
</ul>

<h3>DTI (Debt To Income, 총부채상환비율)</h3>
<strong>연소득 대비 원리금 상환액</strong> 비율이에요.
<ul>
<li>주택담보대출의 원리금 + 기타 대출 이자를 합산</li>
<li>DTI 60% & 연봉 5,000만원 → 연 상환 한도 3,000만원</li>
</ul>

<h3>DSR (Debt Service Ratio, 총부채원리금상환비율)</h3>
<strong>모든 대출의 원리금</strong>을 연소득으로 나눈 것. 현재 가장 강력한 규제!
<ul>
<li>2026년 기준 DSR <strong>40%</strong> 적용</li>
<li>신용대출, 카드론, 학자금 대출까지 전부 포함</li>
<li>연봉 5,000만원 × 40% = 연 2,000만원이 모든 대출 상환 한도</li>
</ul>

<h3>실제 계산 예시</h3>
연봉 6,000만원, 아파트 8억, LTV 50%, DSR 40%
<ul>
<li>LTV 기준: 8억 × 50% = <strong>4억</strong></li>
<li>DSR 기준: 연 상환 한도 2,400만원 → 30년 원리금균등 상환 시 약 <strong>5.5억</strong></li>
<li>둘 중 <strong>작은 금액</strong>이 실제 한도 → 4억</li>
</ul>`,
    summaryTerms:[
      {name:'LTV (담보인정비율)', desc:'집값 대비 대출 한도 비율. LTV 70% → 5억 집에 최대 3.5억 대출.'},
      {name:'DTI (총부채상환비율)', desc:'연소득 대비 원리금 상환액 비율. 소득 낮으면 대출 한도 감소.'},
      {name:'DSR (총부채원리금상환비율)', desc:'모든 대출 상환액을 연소득으로 나눈 것. 현재 가장 강력한 규제. 40% 적용.'}
    ]
  },
  { day:4, week:1, title:'실거래가·공시가격·호가·KB시세', desc:'4가지 가격이 왜 다른지, 투자 시 어떤 가격을 봐야 하나', tag:'w1',
    studyContent: `<h3>1. 실거래가</h3>
<strong>실제 거래된 가격</strong>이에요.
<ul>
<li>국토부 실거래가 공개시스템(rt.molit.go.kr)에서 무료 조회</li>
<li>가장 정확한 가격이지만, 과거 데이터라 현재 시세와 다를 수 있음</li>
</ul>

<h3>2. 공시가격</h3>
<strong>정부가 산정한 기준가격</strong>이에요.
<ul>
<li>재산세, 종부세, 건강보험료 계산의 기준</li>
<li>시세의 60~70% 수준으로 낮게 책정</li>
<li>매년 1월 1일 기준으로 공시</li>
</ul>

<h3>3. 호가</h3>
집주인이 <strong>"이 가격에 팔겠다"</strong>고 부르는 희망 가격이에요.
<ul>
<li>실거래가보다 높은 경우가 많음</li>
<li>네이버 부동산 등에서 보이는 가격은 대부분 호가</li>
</ul>

<h3>4. KB시세</h3>
KB국민은행이 조사하는 시세예요.
<ul>
<li><strong>은행 대출 한도 계산의 기준!</strong></li>
<li>매주 업데이트, kbland.kr에서 확인</li>
<li>상한가/하한가/일반가로 구분</li>
</ul>

<h3>투자할 때 어떤 가격을 봐야 할까?</h3>
<ul>
<li><strong>매수 판단:</strong> 실거래가 + KB시세 비교</li>
<li><strong>대출 한도:</strong> KB시세 기준</li>
<li><strong>세금 계산:</strong> 공시가격 기준</li>
<li><strong>호가는 참고만!</strong> 협상의 시작점일 뿐</li>
</ul>`,
    summaryTerms:[
      {name:'실거래가', desc:'실제 거래된 가격. 국토부 실거래가 공개시스템에서 무료 조회.'},
      {name:'공시가격', desc:'정부 산정 기준가격. 재산세·종부세 계산 기준. 시세보다 낮음.'},
      {name:'호가', desc:'집주인이 부르는 희망가격. 실거래가와 다를 수 있음.'},
      {name:'KB시세', desc:'KB국민은행 조사 시세. 은행 대출 한도 계산 기준.'}
    ]
  },
  { day:5, week:1, title:'아파트 vs 빌라 vs 오피스텔', desc:'유형별 장단점, 투자 관점 비교', tag:'w1',
    studyContent: `<h3>아파트</h3>
<ul>
<li><strong>환금성 최고:</strong> 거래량 많고, 시세가 투명해요</li>
<li>관리비로 공용시설 관리, 보안 시스템 우수</li>
<li>초보 투자자에게 <strong>가장 추천</strong>되는 유형</li>
<li>취득세: 1~3% (1주택 기준)</li>
</ul>

<h3>빌라 (다세대/다가구)</h3>
<ul>
<li>가격이 저렴하지만 <strong>시세 불투명</strong></li>
<li>환금성 낮음 — 팔고 싶을 때 안 팔릴 수 있음</li>
<li>관리 소홀한 경우 많음</li>
<li>전세 사기 다수 발생 지역: 빌라 밀집 지역</li>
</ul>

<h3>오피스텔</h3>
<ul>
<li>주거 + 업무 복합 용도</li>
<li>취득세율 <strong>4.6%</strong>로 아파트보다 높음</li>
<li>전용률 낮음 (50~60% vs 아파트 75~85%)</li>
<li>수익률이 낮아지는 추세</li>
</ul>

<h3>투자 관점 비교표</h3>
<ul>
<li><strong>환금성:</strong> 아파트 >> 오피스텔 > 빌라</li>
<li><strong>시세 투명도:</strong> 아파트 >> 오피스텔 > 빌라</li>
<li><strong>진입 비용:</strong> 빌라 < 오피스텔 < 아파트</li>
<li><strong>초보 추천:</strong> 아파트가 압도적으로 안전!</li>
</ul>`,
    summaryTerms:[
      {name:'아파트', desc:'환금성 최고, 시세 투명, 관리 편리. 초보 투자자에게 가장 추천.'},
      {name:'빌라(다세대/다가구)', desc:'가격 저렴하나 환금성 낮고 시세 불투명. 리스크 높음.'},
      {name:'오피스텔', desc:'주거+업무 복합. 취득세율 높고 수익률 낮아지는 추세.'}
    ]
  },
  { day:6, week:1, title:'1주차 복습', desc:'용어 퀴즈 + 오답 정리', tag:'w1', isReview:true,
    studyContent:'', summaryTerms:[]
  },
  // 2주차
  { day:7, week:2, title:'금리와 집값의 관계', desc:'금리 사이클이 부동산에 미치는 영향', tag:'w2',
    studyContent: `<h3>금리-집값 역관계</h3>
<strong>금리 상승 → 대출 이자 증가 → 수요 감소 → 집값 하락 압력</strong>

반대로 금리가 내리면 대출 부담이 줄어 매수 수요가 늘고 집값이 오를 수 있어요.

<h3>기준금리란?</h3>
<ul>
<li>한국은행 <strong>금융통화위원회(금통위)</strong>가 결정</li>
<li>연 8회 회의를 통해 결정·발표</li>
<li>시중 대출금리의 기준이 됨</li>
</ul>

<h3>역사적 사례</h3>
<ul>
<li><strong>2020~2021년:</strong> 기준금리 0.5% → 유동성 폭발 → 집값 급등</li>
<li><strong>2022~2023년:</strong> 기준금리 3.5%까지 인상 → 거래 절벽, 가격 조정</li>
<li><strong>2024~2025년:</strong> 금리 인하 시작 → 회복세</li>
</ul>

<h3>전세-매매 연동 효과</h3>
<ul>
<li>금리 상승 시: 매매 포기 → <strong>전세 수요 증가</strong> → 전세가 상승 가능</li>
<li>금리 하락 시: 매매 전환 → 전세 수요 감소 → 전세가 하락 가능</li>
</ul>

<h3>투자자가 봐야 할 것</h3>
<ul>
<li>한국은행 기준금리 발표일정 확인</li>
<li>금리 사이클의 <strong>전환점</strong>을 잡는 게 핵심</li>
<li>"금리 인하 시그널"이 나오면 매수 타이밍을 고려</li>
</ul>`,
    summaryTerms:[
      {name:'금리-집값 역관계', desc:'금리 상승 → 대출 이자 증가 → 수요 감소 → 집값 하락 압력.'},
      {name:'기준금리', desc:'한국은행이 결정. 시중 대출금리의 기준. 금통위 회의에서 발표.'},
      {name:'전세-매매 연동', desc:'금리 상승 시 전세 수요 증가(대출 부담 → 매매 포기), 전세가 상승 가능.'}
    ]
  },
  { day:8, week:2, title:'입지 분석 기초', desc:'역세권·학군·일자리·개발호재 체크리스트', tag:'w2',
    studyContent: `<h3>입지 분석이란?</h3>
부동산 가치의 <strong>80%는 입지</strong>가 결정해요. 같은 가격이라도 입지에 따라 미래 가치가 완전히 달라요.

<h3>1. 역세권</h3>
<ul>
<li><strong>도보 10분(800m) 이내:</strong> 역세권</li>
<li><strong>도보 5분(400m) 이내:</strong> 초역세권 (프리미엄)</li>
<li>지하철역 거리가 집값에 가장 직접적 영향</li>
</ul>

<h3>2. 학군</h3>
<ul>
<li>초등학교 배정 구역 확인</li>
<li>중학교 학업성취도 비교</li>
<li>학원가(대치동, 목동 등) 밀집 여부</li>
<li>학군이 좋으면 전세·매매 수요 모두 탄탄</li>
</ul>

<h3>3. 일자리 접근성</h3>
<ul>
<li>직장까지 출퇴근 시간 1시간 이내</li>
<li>대규모 산업단지, 오피스 밀집 지역 인근</li>
<li>"직주근접"이 핵심 키워드</li>
</ul>

<h3>4. 개발호재</h3>
<ul>
<li><strong>GTX, 신규 지하철 노선</strong> 착공/개통</li>
<li><strong>재개발·재건축</strong> 사업 진행 상황</li>
<li><strong>신도시</strong> 지정</li>
<li>가격 반응 순서: 발표 > 착공 > 완공</li>
<li>"소문에 사서 뉴스에 팔라"</li>
</ul>

<h3>체크리스트</h3>
<ul>
<li>[ ] 가장 가까운 지하철역까지 실제 도보 시간</li>
<li>[ ] 근처 초·중학교 배정 구역 및 평가</li>
<li>[ ] 주요 업무지구까지 출퇴근 소요시간</li>
<li>[ ] 향후 3~5년 내 개발 계획 확인</li>
</ul>`,
    summaryTerms:[
      {name:'역세권', desc:'지하철역 도보 10분(800m) 이내. 거리가 집값에 직접적 영향.'},
      {name:'학군', desc:'초등학교 배정 구역, 중학교 학업성취도. 학원가 밀집 여부.'},
      {name:'개발호재', desc:'GTX·재개발·신도시 등 미래 가치 상승 요인. 발표-착공-완공 단계별 가격 반응 다름.'}
    ]
  },
  { day:9, week:2, title:'전세가율과 갭투자 원리', desc:'갭투자 작동 원리와 리스크', tag:'w2',
    studyContent: `<h3>전세가율이란?</h3>
매매가 대비 전세가의 비율이에요.
<strong>전세가율 = 전세가 ÷ 매매가 × 100</strong>

<ul>
<li>5억 아파트, 전세 4억 → 전세가율 <strong>80%</strong></li>
<li>전세가율이 높을수록 → 갭이 작음 → 적은 돈으로 투자 가능</li>
</ul>

<h3>갭투자 원리</h3>
매매가에서 전세가를 뺀 <strong>"갭"</strong>만큼만 자기 돈을 투자하는 방식이에요.
<ul>
<li>매매가 5억, 전세 4억 → 갭 = <strong>1억</strong></li>
<li>1억만 있으면 5억짜리 아파트를 살 수 있음!</li>
</ul>

<h3>수익 시나리오</h3>
<ul>
<li>매수: 5억(전세 4억, 자기돈 1억)</li>
<li>2년 후 매매가 6억으로 상승</li>
<li>수익: 1억(시세차익) → 자기자본 대비 <strong>100% 수익률!</strong></li>
</ul>

<h3>손실 시나리오 (역전세)</h3>
<ul>
<li>매수: 5억(전세 4억, 자기돈 1억)</li>
<li>2년 후 전세가 3.5억으로 하락</li>
<li>기존 세입자에게 4억 반환해야 하는데, 새 세입자가 3.5억만...</li>
<li><strong>5,000만원을 어딘가에서 마련해야!</strong></li>
</ul>

<h3>핵심 리스크 — 역전세</h3>
<ul>
<li>전세가 하락 시 보증금 반환 자금 부족</li>
<li>2022~2023년 역전세 대란으로 많은 갭투자자 피해</li>
<li>전세가율 80% 이상인 곳은 특히 주의!</li>
</ul>`,
    summaryTerms:[
      {name:'전세가율', desc:'매매가 대비 전세가 비율. 80% → 5억 집에 전세 4억. 높을수록 갭 투자 리스크↑.'},
      {name:'갭투자', desc:'매매가-전세가(갭) 차액만 투자해 집 매수. 적은 자본으로 부동산 취득.'},
      {name:'역전세', desc:'전세가 하락 시 집주인이 보증금 반환 어려운 상태. 갭투자 최대 리스크.'}
    ]
  },
  { day:10, week:2, title:'공급·수요 사이클 읽기', desc:'입주 물량, 미분양, 청약 경쟁률 해석', tag:'w2',
    studyContent: `<h3>부동산 시장은 사이클이다</h3>
<strong>공급 부족 → 가격 상승 → 분양 증가 → 입주 물량 증가 → 공급 과잉 → 가격 하락</strong>
이 사이클이 약 5~10년 주기로 반복돼요.

<h3>입주 물량</h3>
<ul>
<li>향후 2~3년 내 공급 예정 물량이 핵심</li>
<li>대량 입주 예정 지역 → <strong>전세가 하락</strong> 가능</li>
<li>입주 물량 적은 지역 → 전세가 상승, 매매가 방어</li>
<li>확인: 부동산114, 부동산R114</li>
</ul>

<h3>미분양</h3>
<ul>
<li>완공 후 팔리지 않은 물량</li>
<li>미분양 증가 = <strong>공급 과잉 신호</strong></li>
<li>국토부 미분양 통계(매월 발표)로 확인</li>
<li>준공 후 미분양(악성 미분양)이 특히 위험</li>
</ul>

<h3>청약 경쟁률</h3>
<ul>
<li>높은 경쟁률 = 실수요/투자수요 집중</li>
<li>분양가 대비 시세 차익 기대감 반영</li>
<li>1순위 경쟁률 100:1 이상 → 인기 지역</li>
<li>미달(1:1 미만) → 해당 지역 수요 약화 신호</li>
</ul>

<h3>실전 활용법</h3>
<ul>
<li>내가 투자할 지역의 <strong>향후 3년 입주 물량</strong> 확인</li>
<li>해당 지역 <strong>미분양 추이</strong> 확인</li>
<li>최근 <strong>청약 경쟁률</strong>로 수요 온도 체크</li>
</ul>`,
    summaryTerms:[
      {name:'입주 물량', desc:'향후 2~3년 내 공급 예정 물량. 대량 입주 예정 지역은 전세가 하락 가능성.'},
      {name:'미분양', desc:'완공 후 팔리지 않은 물량. 증가 = 공급 과잉 신호. 국토부 미분양 통계로 확인.'},
      {name:'청약 경쟁률', desc:'높은 경쟁률 = 실수요/투자수요 집중. 분양가 대비 시세 차익 기대감 반영.'}
    ]
  },
  { day:11, week:2, title:'KB·국토부 통계 직접 보기', desc:'무료 공식 통계 사이트 활용법', tag:'w2',
    studyContent: `<h3>무료로 볼 수 있는 핵심 사이트들</h3>

<h3>1. 국토부 실거래가 (rt.molit.go.kr)</h3>
<ul>
<li>실제 신고된 거래 데이터 무료 공개</li>
<li>지역, 기간, 면적, 가격 필터 가능</li>
<li>가장 정확한 공식 데이터</li>
</ul>

<h3>2. KB부동산 (kbland.kr)</h3>
<ul>
<li>매주 업데이트되는 시세 데이터</li>
<li>매매/전세 지수, 증감률 확인</li>
<li>은행 대출 한도 계산의 기준</li>
<li>지역별 통계, 아파트별 시세</li>
</ul>

<h3>3. 호갱노노 (앱)</h3>
<ul>
<li>아파트 실거래가·시세 흐름을 <strong>직관적 시각화</strong></li>
<li>색상 지도로 가격 변동 한눈에 파악</li>
<li><strong>초보에게 가장 쉬운 앱!</strong></li>
</ul>

<h3>4. 부동산114 / R114</h3>
<ul>
<li>입주 물량, 분양 일정 확인</li>
<li>지역별 시장 분석 리포트</li>
</ul>

<h3>실전 활용 팁</h3>
<ul>
<li><strong>매주 루틴:</strong> KB시세로 관심 지역 매매/전세 증감률 확인</li>
<li><strong>매수 검토 시:</strong> 실거래가로 최근 3개월 거래 확인</li>
<li><strong>호갱노노</strong>로 시세 흐름 그래프 체크</li>
<li>여러 사이트의 데이터를 <strong>교차 검증</strong>하는 습관!</li>
</ul>`,
    summaryTerms:[
      {name:'국토부 실거래가', desc:'rt.molit.go.kr. 실제 거래 데이터 무료 조회. 지역·기간·가격 필터 가능.'},
      {name:'KB부동산 시세', desc:'kbland.kr. 매주 업데이트. 매매/전세 지수, 증감률 확인.'},
      {name:'호갱노노', desc:'아파트 실거래가·시세 흐름 직관적 시각화. 초보에게 가장 쉬운 앱.'}
    ]
  },
  { day:12, week:2, title:'2주차 복습', desc:'시장·대출 퀴즈 + 오답 정리', tag:'w2', isReview:true,
    studyContent:'', summaryTerms:[]
  },
  // 3주차
  { day:13, week:3, title:'취득세·재산세·종부세', desc:'집 살 때·보유할 때 내는 세금 3가지', tag:'w3',
    studyContent: `<h3>1. 취득세 — 집 살 때 1회</h3>
<ul>
<li><strong>1주택:</strong> 1~3% (취득가액 기준)</li>
<li><strong>2주택(조정지역):</strong> 8%</li>
<li><strong>3주택 이상:</strong> 12%</li>
<li>오피스텔: 4.6%</li>
<li>잔금일로부터 60일 이내 신고·납부</li>
</ul>

<h3>2. 재산세 — 매년 보유</h3>
<ul>
<li>매년 <strong>7월(건물분), 9월(토지분)</strong> 납부</li>
<li><strong>공시가격</strong> 기준으로 계산</li>
<li>세율: 0.1~0.4% (누진세)</li>
<li>1주택자는 부담이 크지 않음</li>
</ul>

<h3>3. 종합부동산세(종부세) — 고가 주택</h3>
<ul>
<li><strong>1세대 1주택:</strong> 공시가격 12억 초과 시 부과</li>
<li><strong>다주택자:</strong> 공시가격 합산 9억 초과 시 부과</li>
<li>세율: 0.5~5% (주택 수·가격에 따라)</li>
<li>매년 12월 납부</li>
</ul>

<h3>세금 계산 예시</h3>
매매가 8억, 공시가 5.6억(시세의 70%), 1주택자
<ul>
<li><strong>취득세:</strong> 8억 × 1.1% ≒ 880만원</li>
<li><strong>재산세:</strong> 연 약 80~100만원</li>
<li><strong>종부세:</strong> 공시가 12억 이하이므로 없음</li>
</ul>`,
    summaryTerms:[
      {name:'취득세', desc:'집 살 때 1회 납부. 1주택 1~3%, 다주택 8~12%. 취득가액 기준.'},
      {name:'재산세', desc:'매년 7·9월 보유 주택에 부과. 공시가격 기준.'},
      {name:'종합부동산세(종부세)', desc:'공시가격 합산 9억 초과 시 부과(1세대 1주택 12억). 보유세 중 고가 자산 대상.'}
    ]
  },
  { day:14, week:3, title:'양도소득세 — 팔 때 내는 세금', desc:'비과세 요건, 장기보유특별공제', tag:'w3',
    studyContent: `<h3>양도소득세란?</h3>
집을 팔 때 발생한 <strong>시세차익(양도차익)</strong>에 부과되는 세금이에요.
산 가격과 팔린 가격이 같거나 손해면 내지 않아요.

<h3>비과세 요건 (1세대 1주택)</h3>
<ul>
<li><strong>2년 이상 보유</strong> (기본 요건)</li>
<li>조정대상지역은 <strong>2년 거주</strong>도 충족해야 함</li>
<li>양도가액 <strong>12억 이하</strong>까지 비과세</li>
<li>12억 초과분에 대해서만 과세</li>
</ul>

<h3>장기보유특별공제</h3>
<ul>
<li>3년 이상 보유 시 적용</li>
<li>보유: 연 2%씩 최대 30% (15년)</li>
<li>거주: 연 2%씩 최대 40% (20년, 2년 이상 거주 시)</li>
<li>합계 <strong>최대 80%</strong> 공제!</li>
<li>오래 보유하고 거주할수록 세금이 크게 줄어요</li>
</ul>

<h3>다주택자 세율</h3>
<ul>
<li>기본 세율 6~45%에 추가 세율</li>
<li>조정지역 2주택: +20%p</li>
<li>조정지역 3주택: +30%p</li>
<li>최대 <strong>75%</strong>까지 과세 가능!</li>
</ul>

<h3>핵심 포인트</h3>
<ul>
<li>1주택자라면 2년 보유(거주) 후 매도가 세금 0원의 핵심</li>
<li>다주택이라면 세금이 엄청나므로 반드시 세무사 상담</li>
</ul>`,
    summaryTerms:[
      {name:'양도소득세', desc:'집을 팔 때 시세차익에 부과. 차익이 없으면 없음.'},
      {name:'비과세 요건', desc:'1세대 1주택, 2년 이상 보유(조정지역 2년 거주) 시 12억까지 비과세.'},
      {name:'장기보유특별공제', desc:'3년 이상 보유 시 최대 80% 공제. 오래 보유할수록 세금 감소.'}
    ]
  },
  { day:15, week:3, title:'임대차 3법과 계약 주의사항', desc:'계약갱신청구권, 전월세상한제, 체크리스트', tag:'w3',
    studyContent: `<h3>임대차 3법이란?</h3>
세입자를 보호하기 위해 2020년에 시행된 3가지 제도예요.

<h3>1. 계약갱신청구권</h3>
<ul>
<li>세입자가 <strong>1회 계약 연장</strong>을 요구할 수 있는 권리</li>
<li>기존 2년 + 갱신 2년 = <strong>총 4년 거주 보장</strong></li>
<li>집주인이 실거주 목적이면 거절 가능</li>
</ul>

<h3>2. 전월세상한제</h3>
<ul>
<li>갱신 시 임대료를 직전 임대료의 <strong>5% 이내</strong>에서만 인상 가능</li>
<li>신규 계약에는 적용되지 않음 (갱신 시에만)</li>
</ul>

<h3>3. 전세신고제</h3>
<ul>
<li>보증금 <strong>6,000만원 이상</strong> 전세 계약</li>
<li>계약일로부터 <strong>30일 이내</strong> 신고 의무</li>
<li>관할 주민센터 또는 온라인(부동산거래관리시스템)</li>
</ul>

<h3>부동산 계약 체크리스트</h3>
<ul>
<li>[ ] 등기부등본 최신 열람 (계약 당일!)</li>
<li>[ ] 임대인 = 등기부 소유자 본인 확인</li>
<li>[ ] 근저당 + 전세보증금 < 매매가의 70%</li>
<li>[ ] 전세보증보험(HUG/SGI) 가입 가능 여부</li>
<li>[ ] 전입신고 + 확정일자 당일 처리</li>
<li>[ ] 특약사항 꼼꼼히 확인 (원상복구 범위 등)</li>
</ul>`,
    summaryTerms:[
      {name:'계약갱신청구권', desc:'세입자가 1회 계약 연장 요구 가능. 총 4년 거주 보장.'},
      {name:'전월세상한제', desc:'갱신 시 임대료 5% 이내만 인상 가능.'},
      {name:'전세신고제', desc:'6000만원 이상 전세 계약 30일 이내 신고 의무.'}
    ]
  },
  { day:16, week:3, title:'임장 실전 체크리스트', desc:'현장에서 뭘 봐야 하나, 공인중개사 질문법', tag:'w3',
    studyContent: `<h3>임장이란?</h3>
부동산 <strong>현장 방문 조사</strong>예요. 지도와 통계만으로는 알 수 없는 것들을 직접 눈으로 확인하는 거예요.

<h3>임장 전 준비</h3>
<ul>
<li>관심 단지 2~3곳 사전 조사 (시세, 세대수, 연식)</li>
<li>방문 동선 짜기 (효율적 이동)</li>
<li>체크리스트 출력 or 메모 앱 준비</li>
</ul>

<h3>현장 체크포인트</h3>
<ul>
<li><strong>교통:</strong> 지하철역까지 실제 걸어보기! (지도 vs 현실 차이)</li>
<li><strong>주차:</strong> 세대당 주차 대수, 주차장 상태</li>
<li><strong>관리 상태:</strong> 복도, 엘리베이터, 놀이터 청결도</li>
<li><strong>소음:</strong> 도로·철도 소음, 층간소음 평판</li>
<li><strong>주변 상권:</strong> 마트, 편의점, 카페, 병원</li>
<li><strong>학교:</strong> 초등학교 통학로 안전, 거리</li>
<li><strong>경사:</strong> 언덕이 심한지 (특히 빌라 지역)</li>
</ul>

<h3>공인중개사에게 꼭 물어볼 질문</h3>
<ul>
<li>"이 단지 최근 실거래 얼마에 됐나요?"</li>
<li>"급매 물건 있나요?"</li>
<li>"전세/매매 수요가 어떤가요? 빨리 빠지나요?"</li>
<li>"이 단지 특이사항(하자, 민원 등) 있나요?"</li>
<li>"주변 개발 계획 아시는 거 있으세요?"</li>
</ul>

<h3>임장 노트 기록법</h3>
<ul>
<li>방문 날짜, 단지명, 동·호수</li>
<li>호가 vs 실거래가</li>
<li>현장 장점/단점 (사진 첨부)</li>
<li>총평: 투자 매력도 (상/중/하)</li>
</ul>`,
    summaryTerms:[
      {name:'임장', desc:'부동산 현장 방문 조사. 지도/통계만으로 알 수 없는 분위기·인프라 파악.'},
      {name:'임장 체크포인트', desc:'교통(실제 소요시간), 주차, 관리 상태, 소음, 주변 상권·학교·병원.'},
      {name:'공인중개사 활용', desc:'시세·급매 정보, 전세/매매 수요 현황, 해당 단지 특이사항 파악 핵심 창구.'}
    ]
  },
  { day:17, week:3, title:'수익률 계산법', desc:'임대수익률·자기자본수익률 계산 실습', tag:'w3',
    studyContent: `<h3>1. 임대수익률 (총수익률)</h3>
<strong>연 임대소득 ÷ 매입가 × 100</strong>

예시: 3억 아파트, 월세 80만원
<ul>
<li>연 임대소득: 80만 × 12 = 960만원</li>
<li>임대수익률: 960만 ÷ 3억 × 100 = <strong>3.2%</strong></li>
</ul>

순수익률 = 세금·관리비·공실 기간 제외
<ul>
<li>순수익: 960만 - 재산세 50만 - 관리비 120만 - 수선비 30만 = 760만원</li>
<li>순수익률: 760만 ÷ 3억 × 100 = <strong>2.5%</strong></li>
</ul>

<h3>2. 자기자본수익률 (ROE)</h3>
<strong>연 임대소득 ÷ 실투자금(갭) × 100</strong>

예시: 3억 아파트, 전세 2.4억, 자기돈 6,000만원, 월세전환 시 월 80만원
<ul>
<li>연 임대소득: 960만원</li>
<li>ROE: 960만 ÷ 6,000만 × 100 = <strong>16%</strong></li>
<li>레버리지 효과로 수익률이 크게 올라감!</li>
</ul>

<h3>3. 기회비용 비교</h3>
<ul>
<li>2026년 정기예금 금리 약 3%</li>
<li>부동산 임대수익률이 예금금리보다 낮다면?</li>
<li>→ 시세차익이 없는 한 투자 매력 낮음</li>
<li>위험을 감수하는 만큼 <strong>초과 수익</strong>이 있어야 합리적</li>
</ul>

<h3>투자가치 판단 기준</h3>
<ul>
<li>순임대수익률 > 예금금리 → 임대 수익 OK</li>
<li>시세차익 기대 + 임대수익 → 종합 판단</li>
<li>자기자본수익률(ROE)이 핵심 지표</li>
</ul>`,
    summaryTerms:[
      {name:'임대수익률', desc:'연 임대소득 ÷ 매입가 × 100. 순수익률 = 세금·관리비 제외.'},
      {name:'자기자본수익률(ROE)', desc:'연 임대소득 ÷ 실투자금(갭) × 100. 레버리지 효과 반영.'},
      {name:'기회비용 비교', desc:'예금금리 대비 수익률 비교 필수. 위험 대비 초과 수익 확인.'}
    ]
  },
  { day:18, week:3, title:'3주 총복습', desc:'핵심 개념 퀴즈 + 나만의 투자 원칙 정리', tag:'w3', isReview:true,
    studyContent:'', summaryTerms:[]
  }
];

// ── QUIZ BANK ──
const QUIZ_BANK = {
  1: [
    { q:'전세의 가장 큰 특징은 무엇인가요?', opts:['매달 월세를 낸다','목돈을 맡기고 월임차료 없이 거주한다','소유권이 세입자에게 넘어간다','계약 종료 시 보증금 일부만 반환된다'], ans:1, exp:'전세는 목돈(보증금)을 집주인에게 맡기고 월세 없이 거주하는 한국 고유 제도예요. 계약 종료 시 보증금 전액을 돌려받아요.' },
    { q:'반전세란 무엇인가요?', opts:['전세보증금이 집값의 반인 경우','전세보증금 일부를 월세로 전환한 혼합 방식','6개월 단위로 계약하는 방식','집값의 50%만 내는 매매 방식'], ans:1, exp:'반전세는 전세와 월세의 중간 형태로, 전세보증금 일부를 월세로 전환한 방식이에요.' },
    { q:'다음 중 매매의 특징으로 올바른 것은?', opts:['소유권이 넘어오지 않는다','계약 종료 시 금액을 돌려받는다','소유권이 완전히 취득자에게 넘어온다','매달 임차료를 내야 한다'], ans:2, exp:'매매는 부동산의 소유권을 완전히 취득하는 거래예요. 집을 완전히 내 것으로 만드는 방식이에요.' }
  ],
  2: [
    { q:'등기부등본의 갑구에서 확인하는 것은?', opts:['근저당 설정 여부','소유권 및 가압류 여부','전세권 등록 여부','건물 용도 및 면적'], ans:1, exp:'갑구는 소유권에 관한 사항이 기재돼요. 현재 소유자가 누구인지, 가압류·압류 여부를 확인할 수 있어요.' },
    { q:'을구에서 주로 확인하는 내용은?', opts:['소유자 이름','건축 연도','근저당·전세권 등 돈 관련 권리','토지 면적'], ans:2, exp:'을구는 소유권 이외의 권리사항을 기재해요. 근저당(담보대출), 전세권 등 금전 관련 권리를 확인할 수 있어요.' },
    { q:'인터넷등기소에서 등기부등본 열람 비용은?', opts:['무료','300원','700원','2,000원'], ans:2, exp:'인터넷등기소(iros.go.kr)에서 700원에 열람할 수 있어요. 직접 한 번 떼어보는 것을 강력히 추천해요!' }
  ],
  3: [
    { q:'DSR 40% 규제에서 연봉 5,000만원인 경우 연간 총 원리금 상환 한도는?', opts:['1,000만원','2,000만원','3,000만원','4,000만원'], ans:1, exp:'DSR 40% = 연소득 × 40%. 5,000만원 × 40% = 2,000만원이 연간 모든 대출의 원리금 상환 한도예요.' },
    { q:'LTV가 70%일 때, 6억원 아파트의 최대 대출 가능 금액은?', opts:['2억원','3억원','4억 2천만원','5억원'], ans:2, exp:'LTV 70% = 집값 × 70%. 6억 × 70% = 4억 2천만원이 최대 대출 한도예요.' },
    { q:'현재 가장 강력한 대출 규제는 무엇인가요?', opts:['LTV','DTI','DSR','기준금리'], ans:2, exp:'DSR은 주택담보대출뿐 아니라 신용대출, 카드론 등 모든 대출의 원리금을 합산하여 소득과 비교하는 가장 강력한 규제예요.' }
  ],
  4: [
    { q:'은행 대출 한도 계산의 기준이 되는 시세는?', opts:['실거래가','공시가격','호가','KB시세'], ans:3, exp:'은행들은 대출 한도를 계산할 때 KB국민은행이 조사하는 KB시세를 기준으로 사용해요.' },
    { q:'재산세와 종합부동산세 계산의 기준이 되는 가격은?', opts:['실거래가','공시가격','호가','KB시세'], ans:1, exp:'재산세, 종합부동산세 등 보유세는 정부가 산정한 공시가격을 기준으로 계산해요. 시세보다 낮게 책정되는 게 일반적이에요.' },
    { q:'집주인이 팔고 싶은 희망 가격을 뜻하는 용어는?', opts:['실거래가','공시가격','호가','감정가'], ans:2, exp:'호가는 집주인이 "이 가격에 팔겠다"고 부르는 희망 가격이에요. 실제로 거래된 실거래가와 다를 수 있어요.' }
  ],
  5: [
    { q:'부동산 투자 시 환금성이 가장 좋은 유형은?', opts:['빌라(다세대)','단독주택','아파트','오피스텔'], ans:2, exp:'아파트는 시세가 투명하고 거래량이 많아 환금성이 가장 높아요. 초보 투자자에게 가장 추천되는 이유예요.' },
    { q:'오피스텔의 특징으로 올바른 것은?', opts:['취득세율이 아파트와 동일하다','주거와 업무 복합 용도다','아파트보다 환금성이 높다','종부세 부과 대상이 아니다'], ans:1, exp:'오피스텔은 주거와 업무를 겸할 수 있는 복합 용도 건물이에요. 취득세율이 아파트보다 높고(4.6%), 환금성이 낮은 편이에요.' },
    { q:'빌라(다세대주택)의 단점은?', opts:['가격이 너무 비싸다','시세가 불투명하고 환금성이 낮다','청약 접수가 어렵다','관리비가 너무 높다'], ans:1, exp:'빌라는 가격이 저렴한 대신 시세가 불투명하고 거래량이 적어 팔고 싶을 때 팔기 어려운 환금성 문제가 있어요.' }
  ],
  7: [
    { q:'금리가 오를 때 일반적으로 집값에 미치는 영향은?', opts:['집값이 오른다','집값이 내린다','집값 변화 없다','전세가만 내린다'], ans:1, exp:'금리 상승 → 대출 이자 증가 → 매수 수요 감소 → 집값 하락 압력. 단, 입지 좋은 곳은 하락폭이 작을 수 있어요.' },
    { q:'기준금리를 결정하는 기관은?', opts:['기획재정부','금융감독원','한국은행 금융통화위원회','국토교통부'], ans:2, exp:'기준금리는 한국은행 금융통화위원회(금통위)에서 결정해요. 보통 연 8회 회의를 통해 결정·발표해요.' },
    { q:'금리 상승 시 전세 시장에서 나타날 수 있는 현상은?', opts:['전세 수요 감소, 전세가 하락','전세 수요 증가, 전세가 상승 가능','전세 시장에 영향 없음','전세가 폐지됨'], ans:1, exp:'금리가 오르면 매매 대신 전세를 선택하는 수요가 늘어나 전세 수요가 증가하고 전세가가 상승할 수 있어요.' }
  ],
  8: [
    { q:'역세권의 일반적인 기준 거리는?', opts:['도보 3분 이내(200m)','도보 10분 이내(800m)','도보 20분 이내(1.5km)','버스로 10분 이내'], ans:1, exp:'역세권은 일반적으로 지하철역 도보 10분(약 800m) 이내를 말해요. 도보 5분(400m) 이내는 초역세권으로 프리미엄이 붙어요.' },
    { q:'개발호재에서 가격 반응이 가장 큰 시점은?', opts:['완공 이후','착공 이후','계획 발표 직후','입주 시작 후'], ans:2, exp:'개발호재는 발표 → 착공 → 완공 순인데, 가격은 보통 발표(계획 발표) 직후에 가장 크게 반응해요.' },
    { q:'입지 분석에서 학군을 볼 때 중요한 요소가 아닌 것은?', opts:['초등학교 배정 구역','중학교 학업성취도','학원가 밀집 여부','대학교까지의 거리'], ans:3, exp:'학군 분석에서는 초등학교 배정 구역, 중학교 성적, 학원가 접근성이 핵심이에요. 대학교 거리는 학군보다는 직주근접 입지 분석 요소예요.' }
  ],
  9: [
    { q:'아파트 매매가 5억, 전세가 4억일 때 전세가율은?', opts:['40%','60%','80%','100%'], ans:2, exp:'전세가율 = 전세가 ÷ 매매가 × 100 = 4억 ÷ 5억 × 100 = 80%.' },
    { q:'갭투자의 가장 큰 리스크는?', opts:['취득세 부담','역전세로 보증금 반환 어려움','임대소득세 부담','관리비 상승'], ans:1, exp:'갭투자의 최대 리스크는 역전세예요. 전세가 하락 시 집주인이 세입자에게 보증금을 돌려줄 자금이 부족해질 수 있어요.' },
    { q:'갭투자에서 "갭"이란?', opts:['집값과 공시가격의 차이','매매가와 전세가의 차이','대출금과 자기자본의 차이','호가와 실거래가의 차이'], ans:1, exp:'"갭"은 매매가에서 전세가를 뺀 금액이에요. 이 금액만 투자하면 전세를 끼고 집을 살 수 있어요.' }
  ],
  10: [
    { q:'미분양 물량이 증가할 때 의미하는 것은?', opts:['공급 부족 신호','공급 과잉 신호','수요 증가 신호','가격 상승 신호'], ans:1, exp:'미분양 증가는 공급이 수요를 초과했다는 신호예요. 해당 지역 집값 하락 압력이 생길 수 있어요.' },
    { q:'청약 경쟁률이 높은 단지가 의미하는 것은?', opts:['분양가가 시세보다 높다','실수요/투자수요가 집중됨','해당 지역 집값이 이미 비싸다','청약 기준이 너무 엄격하다'], ans:1, exp:'높은 청약 경쟁률은 실수요자와 투자자 모두 그 단지에 관심이 많다는 의미예요.' },
    { q:'향후 입주 물량이 대량으로 예정된 지역의 일반적인 전세 시장 전망은?', opts:['전세가 상승','전세가 하락 가능성','전세 시장 변화 없음','전세가 폐지 가능성'], ans:1, exp:'입주 물량이 많아지면 전세 공급이 늘어나 전세가가 하락할 수 있어요.' }
  ],
  11: [
    { q:'초보 투자자에게 가장 직관적인 시세 확인 앱은?', opts:['국토부 실거래가 시스템','KB부동산','호갱노노','부동산114'], ans:2, exp:'호갱노노는 아파트 실거래가와 시세 흐름을 직관적인 색상 지도로 보여줘서 초보자가 가장 쉽게 접근할 수 있는 앱이에요.' },
    { q:'국토부 실거래가 공개시스템의 특징은?', opts:['유료 서비스','주간 단위 업데이트','실제 신고된 거래가 무료 공개','KB시세와 동일한 데이터'], ans:2, exp:'국토부 실거래가 시스템(rt.molit.go.kr)은 실제로 신고된 거래 데이터를 무료로 공개해요.' },
    { q:'KB부동산 시세는 얼마나 자주 업데이트되나요?', opts:['매일','매주','매월','분기별'], ans:1, exp:'KB부동산 시세는 매주 업데이트되어요. 주간 단위로 매매가·전세가 변동을 확인할 수 있어요.' }
  ],
  13: [
    { q:'다주택자(조정대상지역 2주택)의 취득세율은?', opts:['1~3%','4.6%','8%','12%'], ans:2, exp:'조정대상지역 내 2주택 취득 시 취득세율은 8%예요. 3주택 이상은 12%로 매우 높아져요.' },
    { q:'재산세는 언제 납부하나요?', opts:['매년 1월, 3월','매년 4월, 6월','매년 7월, 9월','매년 10월, 12월'], ans:2, exp:'재산세는 매년 7월(건물분)과 9월(토지분)에 나눠 납부해요.' },
    { q:'종합부동산세가 부과되는 기준은?', opts:['공시가격 합산 3억 초과','공시가격 합산 6억 초과','1세대 1주택 공시가격 12억 초과','시가 10억 초과'], ans:2, exp:'1세대 1주택은 공시가격 12억 초과, 다주택자는 공시가격 합산 9억 초과 시 종부세가 부과돼요.' }
  ],
  14: [
    { q:'1세대 1주택 양도소득세 비과세 기본 요건은?', opts:['1년 보유','2년 보유(조정지역 2년 거주)','3년 보유','5년 보유'], ans:1, exp:'1세대 1주택 비과세는 2년 이상 보유가 기본 요건이에요. 조정대상지역은 2년 거주도 충족해야 해요.' },
    { q:'장기보유특별공제의 최대 공제율은?', opts:['30%','50%','70%','80%'], ans:3, exp:'장기보유특별공제는 최대 80%까지 공제받을 수 있어요. 오래 보유할수록 양도세를 크게 줄일 수 있어요.' },
    { q:'양도소득세가 발생하는 조건은?', opts:['집을 구매할 때','집을 보유하는 동안','집을 팔 때 시세차익이 있을 때','전세 계약을 할 때'], ans:2, exp:'양도소득세는 집을 팔 때 발생한 시세차익(양도차익)에 부과돼요.' }
  ],
  15: [
    { q:'계약갱신청구권을 행사하면 총 몇 년까지 거주할 수 있나요?', opts:['2년','3년','4년','6년'], ans:2, exp:'기존 2년 계약 + 계약갱신청구권 1회 행사(2년 연장) = 총 4년 거주가 보장돼요.' },
    { q:'전월세상한제에서 갱신 시 임대료 인상 한도는?', opts:['2% 이내','3% 이내','5% 이내','10% 이내'], ans:2, exp:'전월세상한제는 계약 갱신 시 임대료를 직전 임대료의 5% 이내에서만 올릴 수 있도록 제한해요.' },
    { q:'전세 신고 의무가 발생하는 보증금 기준은?', opts:['3,000만원 이상','5,000만원 이상','6,000만원 이상','1억원 이상'], ans:2, exp:'보증금 6,000만원 이상 전세 계약은 계약일로부터 30일 이내에 신고해야 해요.' }
  ],
  16: [
    { q:'임장 시 가장 먼저 확인해야 할 교통 요소는?', opts:['버스 노선 수','지하철역까지 실제 도보 소요시간','택시 이용 편의성','고속도로 인터체인지 거리'], ans:1, exp:'대중교통 중 지하철역까지의 실제 도보 시간이 집값에 가장 직접적인 영향을 줘요.' },
    { q:'임장에서 공인중개사를 통해 가장 잘 파악할 수 있는 정보는?', opts:['등기부등본 내용','공시가격','급매 정보와 실거래 동향','건축물대장 내용'], ans:2, exp:'공인중개사는 해당 지역 급매 정보, 전세/매매 수요 현황, 단지 특이사항 등 생생한 정보를 줄 수 있어요.' },
    { q:'임장 노트에 반드시 기록해야 하는 것은?', opts:['집주인 연락처','방문 날짜, 위치, 호가, 장단점','공인중개사 평가','동네 주민 인터뷰'], ans:1, exp:'임장 노트에는 방문 날짜, 단지명·호수·동, 호가·실거래가, 현장에서 느낀 장단점을 반드시 기록해요.' }
  ],
  17: [
    { q:'5억 아파트에서 월세 100만원을 받을 때 임대수익률은?', opts:['1.2%','2.4%','3.6%','4.8%'], ans:1, exp:'임대수익률 = 연 임대소득 ÷ 매입가 × 100 = (100만×12) ÷ 5억 × 100 = 2.4%예요.' },
    { q:'자기자본수익률(ROE) 계산 시 분모에 들어가는 것은?', opts:['매입가 전체','전세가','실투자금(갭, 자기돈)','대출금'], ans:2, exp:'자기자본수익률 = 연 임대소득 ÷ 실투자금(갭) × 100. 레버리지를 활용할수록 ROE가 높아질 수 있어요.' },
    { q:'투자가치 판단 시 임대수익률과 비교해야 하는 것은?', opts:['소비자물가상승률','은행 정기예금금리','코스피 지수 수익률','주변 맛집 수'], ans:1, exp:'부동산 임대수익률은 최소한 은행 정기예금금리보다 높아야 의미가 있어요.' }
  ]
};

const REVIEW_TOPICS = {
  6: [1,2,3,4,5],
  12: [7,8,9,10,11],
  18: [13,14,15,16,17]
};

// ════════════════════════════════════════
// STATE (localStorage)
// ════════════════════════════════════════
const STATE_KEY = 'ibujin_state_v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STATE_KEY);
    return raw ? JSON.parse(raw) : defaultState();
  } catch(e) { return defaultState(); }
}

function defaultState() {
  return {
    currentDay: 1,
    completedDays: [],
    quizScores: {},
    wrongNotes: [],
    summaryDates: {},
    lastStudied: null
  };
}

let STATE = loadState();

function saveState() {
  try {
    localStorage.setItem(STATE_KEY, JSON.stringify(STATE));
  } catch(e) {}
}

// ════════════════════════════════════════
// NAVIGATION
// ════════════════════════════════════════
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.getElementById('nav-'+name).classList.add('active');

  if (name==='home') renderHome();
  if (name==='curriculum') renderCurriculum();
  if (name==='study') renderStudyPage();
  if (name==='quiz') renderQuizPage();
  if (name==='notes') renderNotes();
  if (name==='summary') renderSummary();
}

// make showPage global
window.showPage = showPage;

// ════════════════════════════════════════
// HOME
// ════════════════════════════════════════
function renderHome() {
  const completed = STATE.completedDays.length;
  document.getElementById('stat-days').textContent = completed;
  const scores = Object.values(STATE.quizScores);
  const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length) : 0;
  document.getElementById('stat-quiz').textContent = avg + '%';
  document.getElementById('stat-wrong').textContent = STATE.wrongNotes.length;

  const today = new Date().toLocaleDateString('ko-KR',{month:'long',day:'numeric',weekday:'short'});
  document.getElementById('today-info').textContent = today + ' · Day ' + STATE.currentDay + ' 진행 중';

  // Day grid
  const grid = document.getElementById('home-day-grid');
  grid.innerHTML = '';
  CURRICULUM.forEach(c => {
    const d = document.createElement('div');
    d.className = 'day-dot';
    d.textContent = c.day;
    if (STATE.completedDays.includes(c.day)) { d.classList.add('completed'); d.textContent = '\u2713'; }
    else if (c.day === STATE.currentDay) d.classList.add('current');
    d.onclick = () => { STATE.currentDay = c.day; saveState(); showPage('study'); };
    grid.appendChild(d);
  });

  // Today card
  const tc = document.getElementById('today-content');
  const todayData = CURRICULUM.find(c => c.day === STATE.currentDay);
  if (!todayData) return;

  const isCompleted = STATE.completedDays.includes(STATE.currentDay);

  tc.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
      <span class="tag tag-${todayData.tag}">Day ${todayData.day}</span>
      <span style="font-size:15px;font-weight:500;color:var(--text)">${todayData.title}</span>
    </div>
    <p style="font-size:13px;color:var(--text3);margin-bottom:16px;">${todayData.desc}</p>
    ${isCompleted ? `<div style="font-size:13px;color:var(--green);margin-bottom:12px;">\u2713 완료! 퀴즈 점수: ${STATE.quizScores[STATE.currentDay]||0}%</div>` : ''}
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="showPage('study')">학습 시작</button>
      <button class="btn btn-secondary" onclick="showPage('quiz')">퀴즈 풀기</button>
    </div>
  `;
}

// ════════════════════════════════════════
// CURRICULUM
// ════════════════════════════════════════
function renderCurriculum() {
  const list = document.getElementById('curriculum-list');
  list.innerHTML = '';

  [1,2,3].forEach(w => {
    const days = CURRICULUM.filter(c => c.week === w);
    const tagClass = ['w1','w2','w3'][w-1];
    const titles = ['1주차 \u2014 부동산 언어','2주차 \u2014 시장 흐름','3주차 \u2014 세금\u00B7실전'];
    const subs = ['매매\u00B7전세\u00B7등기\u00B7LTV 등 기초 용어','금리\u00B7입지\u00B7전세가율\u00B7공급수요','세금 3종\u00B7임장\u00B7수익률 계산'];

    const sec = document.createElement('div');
    sec.className = 'week-section';
    sec.innerHTML = `
      <div class="week-header">
        <span class="week-badge ${tagClass}">${w}주차</span>
        <div>
          <div class="week-title-text">${titles[w-1]}</div>
          <div class="week-sub-text">${subs[w-1]}</div>
        </div>
      </div>
    `;

    days.forEach(c => {
      const isCompleted = STATE.completedDays.includes(c.day);
      const isCurrent = c.day === STATE.currentDay;
      const row = document.createElement('div');
      row.className = 'day-row' + (isCompleted?' completed':isCurrent?' current':'');
      row.innerHTML = `
        <div class="day-num-badge">${isCompleted?'\u2713':c.day}</div>
        <div class="day-info">
          <div class="day-title-text">${c.title}${c.isReview?' \uD83D\uDD04':''}</div>
          <div class="day-desc">${c.desc}</div>
        </div>
        <div class="day-status ${isCompleted?'status-done':isCurrent?'status-current':'status-locked'}">
          ${isCompleted?'완료':isCurrent?'진행 중':'대기'}
        </div>
      `;
      row.onclick = () => { STATE.currentDay = c.day; saveState(); showPage('study'); };
      sec.appendChild(row);
    });

    list.appendChild(sec);
  });
}

// ════════════════════════════════════════
// STUDY
// ════════════════════════════════════════
function renderStudyPage() {
  const area = document.getElementById('study-area');
  const c = CURRICULUM.find(d => d.day === STATE.currentDay);
  if (!c) return;

  const isReview = c.isReview;

  area.innerHTML = `
    <div class="page-header">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
        <span class="tag tag-${c.tag}">Day ${c.day}</span>
        ${STATE.completedDays.includes(c.day) ? '<span style="font-size:12px;color:var(--green)">\u2713 완료</span>' : ''}
      </div>
      <div class="page-title">${c.title}</div>
      <div class="page-sub">${c.desc}</div>
    </div>
    ${isReview ? renderReviewStudy(c) : renderNormalStudy(c)}
  `;
}

function renderNormalStudy(c) {
  return `
    <div class="study-content">${c.studyContent}</div>

    <div style="margin-bottom:12px;">
      <div class="card-title">오늘의 핵심 용어</div>
      ${c.summaryTerms.map(t => `
        <div style="margin-bottom:12px;">
          <div style="font-size:13px;font-weight:500;color:var(--accent2);margin-bottom:3px;">${t.name}</div>
          <div style="font-size:12px;color:var(--text3);line-height:1.6;">${t.desc}</div>
        </div>
      `).join('')}
    </div>

    <div class="divider"></div>

    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button class="btn btn-primary" onclick="markComplete(${c.day})">학습 완료 & 퀴즈 풀기</button>
      <button class="btn btn-secondary" onclick="showPage('quiz')">퀴즈만 풀기</button>
    </div>
  `;
}

function renderReviewStudy(c) {
  const weekDays = REVIEW_TOPICS[c.day] || [];
  return `
    <div class="card" style="border-color:rgba(155,127,212,0.3);">
      <div class="card-title" style="color:var(--purple)">이번 주 복습</div>
      <p style="font-size:13px;color:var(--text3);margin-bottom:14px;">이번 주 학습한 내용 중 오답을 포함한 복습 퀴즈를 풀어보세요.</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
        ${weekDays.map(d => {
          const dc = CURRICULUM.find(c=>c.day===d);
          return `<span class="tag tag-${dc?.tag||'w1'}">Day ${d}: ${dc?.title||''}</span>`;
        }).join('')}
      </div>
      <button class="btn btn-primary" onclick="startWeekReviewQuiz(${c.day})">주차 복습 퀴즈 시작</button>
    </div>
  `;
}

window.markComplete = function(day) {
  if (!STATE.completedDays.includes(day)) {
    STATE.completedDays.push(day);
    const c = CURRICULUM.find(d=>d.day===day);
    if (c) STATE.summaryDates[day] = new Date().toLocaleDateString('ko-KR');
    if (day === STATE.currentDay && day < 18) {
      STATE.currentDay = day + 1;
    }
    saveState();
    showToast('Day ' + day + ' 완료!');
  }
  showPage('quiz');
};

// ════════════════════════════════════════
// QUIZ ENGINE
// ════════════════════════════════════════
let currentQuizState = null;

function renderQuizPage() {
  const area = document.getElementById('quiz-area');
  const c = CURRICULUM.find(d => d.day === STATE.currentDay);
  if (!c) return;

  if (currentQuizState && !currentQuizState.done) {
    renderQuizQuestion();
    return;
  }

  const quizBank = QUIZ_BANK[STATE.currentDay];
  const hasQuiz = quizBank && quizBank.length > 0;

  area.innerHTML = `
    <div class="page-header">
      <div class="page-title">퀴즈</div>
      <div class="page-sub">Day ${STATE.currentDay} \u00B7 ${c.title}</div>
    </div>
    ${hasQuiz ? `
    <div class="card">
      <div class="card-title">오늘의 퀴즈</div>
      <p style="font-size:13px;color:var(--text3);margin-bottom:6px;">문제 수: ${quizBank.length}문제</p>
      ${STATE.quizScores[STATE.currentDay] !== undefined ? `
        <p style="font-size:13px;color:var(--green);margin-bottom:12px;">이전 점수: ${STATE.quizScores[STATE.currentDay]}%</p>
      ` : ''}
      <button class="btn btn-primary" onclick="startQuiz(${STATE.currentDay})">퀴즈 시작</button>
    </div>
    ` : `
    <div class="empty-state">
      <div class="empty-icon">\uD83D\uDCC5</div>
      <div class="empty-text">이 날은 복습 퀴즈로 진행돼요<br>커리큘럼에서 복습 시작을 눌러주세요</div>
    </div>
    `}
  `;
}

window.startQuiz = function(day) {
  const bank = QUIZ_BANK[day];
  if (!bank) return;
  currentQuizState = {
    day,
    questions: [...bank],
    currentIdx: 0,
    wrongs: [],
    score: 0,
    done: false,
    isReview: false
  };
  renderQuizQuestion();
};

window.startWeekReviewQuiz = function(reviewDay) {
  const weekDays = REVIEW_TOPICS[reviewDay] || [];
  let allQs = [];
  weekDays.forEach(d => {
    const bank = QUIZ_BANK[d];
    if (bank) allQs.push(...bank);
  });
  const wrongs = STATE.wrongNotes.filter(w => weekDays.includes(w.day));
  const wrongQs = wrongs.map(w => {
    const bank = QUIZ_BANK[w.day];
    return bank ? bank.find(q => q.q === w.question) : null;
  }).filter(Boolean);
  const others = allQs.filter(q => !wrongQs.find(wq=>wq.q===q.q));
  shuffle(others);
  const selected = [...wrongQs, ...others].slice(0, 8);

  currentQuizState = {
    day: reviewDay,
    questions: selected,
    currentIdx: 0,
    wrongs: [],
    score: 0,
    done: false,
    isReview: true,
    label: `${Math.ceil(reviewDay/6)}주차 복습`
  };
  showPage('quiz');
  renderQuizQuestion();
};

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  const qs = currentQuizState;
  if (qs.done) { renderQuizResult(); return; }
  const q = qs.questions[qs.currentIdx];
  const total = qs.questions.length;
  const pct = Math.round((qs.currentIdx / total) * 100);

  area.innerHTML = `
    <div class="page-header">
      <div class="page-title">${qs.label || 'Day '+qs.day+' 퀴즈'}</div>
    </div>
    <div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
      <div class="quiz-question-num">${qs.currentIdx+1} / ${total}</div>
      <div class="quiz-question-text">${q.q}</div>
      <div class="quiz-options" id="quiz-opts">
        ${q.opts.map((opt,i) => `
          <div class="quiz-option" onclick="selectAnswer(${i})" data-idx="${i}">
            <span class="option-letter">${'ABCD'[i]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
      <div id="quiz-next-btn"></div>
    </div>
  `;
}

window.selectAnswer = function(selected) {
  const q = currentQuizState.questions[currentQuizState.currentIdx];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o => o.classList.add('disabled'));

  const isCorrect = selected === q.ans;
  opts[selected].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) opts[q.ans].classList.add('correct');

  const feedback = document.getElementById('quiz-feedback');
  feedback.style.display = 'block';
  feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'wrong');
  feedback.innerHTML = isCorrect
    ? `\u2713 정답! ${q.exp}`
    : `\u2717 오답. 정답은 <strong>${'ABCD'[q.ans]}. ${q.opts[q.ans]}</strong><br><br>${q.exp}`;

  if (isCorrect) {
    currentQuizState.score++;
  } else {
    currentQuizState.wrongs.push({
      day: currentQuizState.day,
      question: q.q,
      myAns: q.opts[selected],
      correctAns: q.opts[q.ans],
      exp: q.exp,
      date: new Date().toLocaleDateString('ko-KR')
    });
  }

  const nextBtn = document.getElementById('quiz-next-btn');
  const isLast = currentQuizState.currentIdx === currentQuizState.questions.length - 1;
  nextBtn.innerHTML = `<button class="btn btn-primary" onclick="nextQuestion()">${isLast ? '결과 보기' : '다음 문제 \u2192'}</button>`;
};

window.nextQuestion = function() {
  currentQuizState.currentIdx++;
  if (currentQuizState.currentIdx >= currentQuizState.questions.length) {
    currentQuizState.done = true;
    const score = Math.round((currentQuizState.score / currentQuizState.questions.length) * 100);
    STATE.quizScores[currentQuizState.day] = score;
    currentQuizState.wrongs.forEach(w => {
      if (!STATE.wrongNotes.find(n => n.question === w.question && n.day === w.day)) {
        STATE.wrongNotes.push(w);
      }
    });
    if (!STATE.completedDays.includes(currentQuizState.day)) {
      STATE.completedDays.push(currentQuizState.day);
      STATE.summaryDates[currentQuizState.day] = new Date().toLocaleDateString('ko-KR');
    }
    saveState();
    renderQuizResult();
  } else {
    renderQuizQuestion();
  }
};

function renderQuizResult() {
  const area = document.getElementById('quiz-area');
  const qs = currentQuizState;
  const score = Math.round((qs.score / qs.questions.length) * 100);
  const msg = score === 100 ? '완벽해요!' : score >= 70 ? '잘 했어요!' : '오답노트를 꼭 확인하세요';

  let wrongHtml = '';
  if (qs.wrongs.length > 0) {
    wrongHtml = `
      <div style="margin-top:20px;text-align:left;">
        <div class="card-title">방금 틀린 문제</div>
        ${qs.wrongs.map(w => `
          <div class="wrong-note">
            <div class="wrong-note-q">Q. ${w.question}</div>
            <div class="wrong-note-row"><span class="wrong-label-my">내 답:</span> ${w.myAns}</div>
            <div class="wrong-note-row"><span class="wrong-label-correct">정답:</span> ${w.correctAns}</div>
            <div class="wrong-note-explain">${w.exp}</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  area.innerHTML = `
    <div class="quiz-result">
      <div class="result-score">${score}%</div>
      <div class="result-msg">${msg}</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-primary" onclick="showPage('summary')">요약노트 보기</button>
        <button class="btn btn-secondary" onclick="startQuiz(${qs.day})">재도전</button>
        <button class="btn btn-secondary" onclick="showPage('home')">홈으로</button>
      </div>
    </div>
    ${wrongHtml}
  `;
}

// ════════════════════════════════════════
// WRONG NOTES
// ════════════════════════════════════════
function renderNotes() {
  const list = document.getElementById('notes-list');
  if (STATE.wrongNotes.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">\uD83C\uDFAF</div><div class="empty-text">아직 틀린 문제가 없어요!<br>퀴즈를 풀어보세요</div></div>`;
    return;
  }

  const byDay = {};
  STATE.wrongNotes.forEach(w => {
    if (!byDay[w.day]) byDay[w.day] = [];
    byDay[w.day].push(w);
  });

  list.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <span style="font-size:13px;color:var(--text3);">총 ${STATE.wrongNotes.length}개</span>
      <button class="btn btn-danger btn-sm" onclick="clearNotes()">전체 삭제</button>
    </div>
    ${Object.entries(byDay).sort((a,b)=>Number(b[0])-Number(a[0])).map(([day, wrongs]) => {
      const c = CURRICULUM.find(d=>d.day===Number(day));
      return `
        <div style="margin-bottom:20px;">
          <div style="font-size:12px;font-weight:700;color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px;">
            Day ${day} \u00B7 ${c?.title||''}
          </div>
          ${wrongs.map(w => `
            <div class="wrong-note">
              <div class="wrong-note-q">Q. ${w.question}</div>
              <div class="wrong-note-row"><span class="wrong-label-my">내 답:</span> ${w.myAns}</div>
              <div class="wrong-note-row"><span class="wrong-label-correct">정답:</span> ${w.correctAns}</div>
              <div class="wrong-note-explain">${w.exp}</div>
              <div style="font-size:11px;color:var(--text3);margin-top:6px;">${w.date}</div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('')}
  `;
}

window.clearNotes = function() {
  STATE.wrongNotes = [];
  saveState();
  renderNotes();
  showToast('오답노트를 초기화했어요');
};

// ════════════════════════════════════════
// SUMMARY
// ════════════════════════════════════════
function renderSummary() {
  const list = document.getElementById('summary-list');
  const completed = STATE.completedDays;

  if (completed.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="empty-icon">\uD83D\uDCDA</div><div class="empty-text">아직 완료한 학습이 없어요<br>학습을 시작해보세요!</div></div>`;
    return;
  }

  list.innerHTML = completed.sort((a,b)=>a-b).map(day => {
    const c = CURRICULUM.find(d=>d.day===day);
    if (!c || !c.summaryTerms || c.summaryTerms.length===0) return '';
    const date = STATE.summaryDates[day] || '';
    const score = STATE.quizScores[day];
    const cardId = 'summary-day-'+day;
    return `
      <div class="summary-day-card" id="${cardId}">
        <div class="summary-day-header" onclick="toggleSummary('${cardId}')">
          <div class="summary-day-title">
            <span class="summary-day-num">Day ${day}</span>
            <span class="summary-day-name">${c.title}</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;">
            ${score !== undefined ? `<span style="font-size:11px;color:var(--green);">${score}%</span>` : ''}
            <span style="font-size:11px;color:var(--text3);">${date}</span>
            <span class="summary-chevron">\u25BC</span>
          </div>
        </div>
        <div class="summary-day-body">
          ${c.summaryTerms.map(t => `
            <div class="summary-term">
              <div class="summary-term-name">${t.name}</div>
              <div class="summary-term-desc">${t.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

window.toggleSummary = function(id) {
  document.getElementById(id).classList.toggle('open');
};

// ════════════════════════════════════════
// UTILS
// ════════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [arr[i],arr[j]] = [arr[j],arr[i]];
  }
  return arr;
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// ════════════════════════════════════════
// INIT
// ════════════════════════════════════════
renderHome();
