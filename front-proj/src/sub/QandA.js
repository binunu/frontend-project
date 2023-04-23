import React from "react";
import "./sub.css";

const QandA = () => {
  return (
    <div className="qa-wrap">
      <div className="qa-sec-01">
        <div className="submenu-textbox">
          <div className="submenu-t submenu-text-1">
            <p>커뮤니티</p>
          </div>
          <div className="submenu-t submenu-text-2">
            <h2>문의하기</h2>
          </div>
        </div>

        <div className="submenu-imgs">
          <div className="submenu-i submenu-img-01">
            <img src="./img/sv_img01.png" alt="기타치는이미지" />
          </div>
          <div className="submenu-i submenu-img-02">
            <img src="./img/sv_img02.png" alt="노래부르는 이미지" />
          </div>
          <div className="submenu-i submenu-img-03">
            <img src="./img/sv_img03.png" alt="오른쪽 위 음표 이미지" />
          </div>
          <div className="submenu-i submenu-img-04">
            <img src="./img/sv_img04.png" alt="왼쪽 위 음표 이미지" />
          </div>
        </div>
      </div>



      <div className="w-wave" />
      <div className="qa-body">

        <div className="qa-container">
          <h2 className="qa-head-h2">2023 서울 페스티벌 일정에 대해 궁금하신 점이 있으신가요?<br />
            아래 양식에 따라 작성 후 제출해주세요!</h2>
          <form>
            <div className='qa-tb'>
              <p className="qa-impor"><span style={{ color: 'red' }}>*</span>은 필수입력 사항입니다.</p>
              <ul className="qa-input-box">
                <li>
                  <label>이름<span>*</span></label>
                  <div className="qib"><input type='text' placeholder='이름을 입력해 주세요' name='name' id="name" />
                    <p>이름을 입력해 주세요</p>
                  </div>
                </li>
                <li>
                  <label>휴대폰번호<span>*</span></label>
                  <div className="qib"><input type='text' placeholder="'-'없이 숫자만 입력해주세요" name='tel' id="tel" />
                    <p>'-'없이 숫자만 입력해주세요</p>
                  </div>
                </li>
                <li>
                  <label >이메일<span>*</span></label>
                  <div className="qib"><input type='text' placeholder='예) abc123@sfc.com' name='email' id="email" />
                    <p>@이하 도메인을 포함한 이메일 주소 전체를 입력해주세요</p>
                  </div>
                </li>
                <li>
                  <label >내용<span>*</span></label>
                  <div className="qib-txtara"><textarea placeholder='내용을 입력해 주세요' name='content' id="content" cols='30' rows='10' /></div>

                </li>
                {/* <li>
                  <label>자동입력방지코드<span>*</span></label>
                  <div><input type='text' placeholder='이름을 입력해 주세요' name='name' id="name"/></div>
                  <p>이름을 입력해 주세요</p>
                </li> */}
              </ul>
            </div>

            <div className="qa-inform">
              <h2 className="qa-head-h2">개인정보 수집/이용</h2>
              <div className="qa-inform-detail">
                제1조 (개인정보의 수집, 이용 목적)
                <br /> <br />
                ■ 수집하는 개인정보 항목<br />
                2023 서울페스티벌캘린더(이하 “SFC 2023”)은 온라인 문의를 위해 아래와 같은 개인정보를 수집하고 있습니다.
                <br /> <br />
                ο 수집항목 : 이름 , 휴대폰번호, 이메일 주소<br />
                ο 개인정보 수집방법 : 홈페이지(온라인 문의)
                <br /> <br />
                ■ 개인정보의 수집 및 이용목적<br />
                SFC 2023는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                <br /> <br />
                ο 온라인 문의 및 처리<br />
                - 서비스 이용에 따른 본인확인, 개인 식별, 고지사항 전달
                <br /> <br />
                제2조 (개인정보의 목적 외 사용 및 제3자에 대한 제공)
                <br /> <br />
                SFC 2023 는 서비스 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다. 단, 관계 법령상 규정이 있는 경우나 이용자의 동의가 있는 경우에는 그러하지 아니합니다.
                <br /> <br />
                제3조 (개인정보의 보유 및 이용 기간)
                <br /> <br />
                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 관계시령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                <br /> <br />
                ο 보존 항목 : 이름 , 휴대폰번호, 이메일 주소<br />
                ο 보존이 필요한 근거 법령 : 통신비밀보호법 접속기록 등 웹사이트 방문 관련 기록 3개월
                <br /> <br />
                제4조 (개인정보의 파기 절차 및 방법)
                <br /> <br />
                개인정보의 파기절차 및 방법은 다음과 같습니다.
                <br /> <br />
                ο 파기절차<br />
                - 이용자가 서비스 신청 등을 위해 입력한 정보는 제3조의 개인정보의 보유 및 이용기간 만료 등 목적이 달성된 후 지체없이 파기됩니다.
                <br /> <br />
                ο 파기방법<br />
                - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                <br /> <br />
                제5조 (개인정보의 자동수집 장치의 설치·운영 및 거부에 관한 사항)
                <br /> <br />
                당 홈페이지는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용하지 않습니다.
                <br /> <br />
                제6조 (개인정보보호를 위한 기술적/관리적 대책)
                <br /> <br />
                SFC 2023는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난, 누출, 변조, 또는 훼손되지 않도록 안전성 확보를 위하여 합리적인 조치를 취할 수 있으며,
                이를 위한 기술적 대책으로는 다음과 같은 것이 있습니다.
                <br /> <br />
                ο 이용자의 개인정보는 기본적으로 비밀번호 및 암호화된 정보에 의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한 데이터는 별도의 보안기능을 통해 보호되고 있습니다.
                <br />
                ο SFC 2023는 백신프로그램을 이용하여 컴퓨터 바이러스에 의한 피해를 방지하기 위한 조치를 취하고 있으며 백신프로그램은 주기적으로 업데이트 됩니다.
                <br /> <br />
                ο SFC 2023는 해킹 및 바이러스 등에 의하여 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해, 외부로부터의 침입탐지 및 침입차단 시스템을 두어
                24시간 모니터링하며 관리하고 있습니다.
                <br /> <br />
                SFC 2023는 이용자의 개인정보보호의 중요성을 인식하고 있으며 이를 위해 개인정보처리직원을 합리적으로 제한하고 있으며 개인정보보호책임자가 처리직원을 대상으로
                교육을 실시하여 개인정보보호를 위해 최선을 다하고 있습니다. 또한 본 정책에 명시된 이행사항 및 관련 직원의 준수여부를 정기적으로 점검하여 위반내용이 있는 경우
                이를 시정 또는 개선하고 기타 필요한 조치를 취하도록 하고 있습니다.
                <br /> <br />
                제7조 (권익침해 구제방법)<br />
                <br /> <br />
                이용자는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                이 밖에 기타 개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기 바랍니다.
                <br /> <br />
                ο 개인정보분쟁조정위원회 : 02-2100-2499 (www.kopico.go.kr)<br />
                ο 개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr)<br />
                ο 대검찰청 사이버범죄수사단 : 02-3480-3571 (www.spo.go.kr)<br />
                ο 경찰청 사이버안전국 : (국번없이) 182 (cyberbureau.police.go.kr)<br />
                「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의 정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에 대하여 공공기관의 장이 행한 처분 또는
                부작위로 인하여 권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할 수 있습니다.
                <br /> <br />
                ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회 (www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                <br /> <br />
                제8조 (개인정보 처리 위탁관리)
                <br />
                <br />
                SFC 2023는 온라인 문의에 대한 해당 개인정보의 처리를 타인에게 위탁하지 않습니다.
                <br />
                <br />
                제9조 (고지의무)
                <br />
                <br />
                현 개인정보처리방침은 2022년 8월 18일 제정되었으며, 정부 및 SFC2023의 정책 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 홈페이지를 통해 사전 공지합니다.
              </div>
              <div className="qa-inform-check">
                <p> 
                <input type="checkbox"/>
                <label className="qa-chk-p">개인정보 수집에 동의합니다.</label>
                </p>
              </div>

            </div>

            <div className="qa-sm-bt"> 
              <input type="submit" value={'제출하기'} className="smbt"></input>
            </div>
          </form>
        </div>


      </div>
    </div>
  );
};

export default QandA;
