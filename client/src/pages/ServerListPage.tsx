import { useEffect, useState } from "react";

// styles
import ListPageBackground from "@/styles/ListPageBackground";
import ListWrap from "@/styles/ListWrap";
import ButtonList from "@/styles/ButtonList";
import TeamButton from "@/components/Buttons/TeamButton";
import TextBox from "@/styles/TextBox";
import NumInput from "@/styles/NumInput";
import { FolderContainer, FolderTab } from "@/styles/FolderBox";

// hooks
import setClass from "@/hooks/setClass";
import setRegion from "@/hooks/setRegion";
import { setTeamCode } from "@/utils/setTeamCode";

// components
import RegionSelectTab from "@/components/Buttons/RegionSelectTab";
import ClassSelectTab from "@/components/Buttons/ClassSelectTab";
import { useNavigate } from "react-router-dom";

const seoul_length = 7;
const etc_length = 2;

const ServerListPage = () => {
  const [selectedRegion, setselectedRegion] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedTeamCnt, setSelectedTeamCnt] = useState("");

  useEffect(() => {
    setselectedRegion(localStorage.getItem("region") ?? "");
    setSelectedClass(localStorage.getItem("class") ?? "");
    setSelectedTeamCnt(localStorage.getItem("teamCnt") ?? "");
  });

  // dropdown menu
  const [regionAnchorEl, setRegionAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [classAnchorEl, setClassAnchorEl] = useState<null | HTMLElement>(null);

  // team code
  const teamCodeList = setTeamCode({
    selectedRegion,
    selectedClass,
    selectedTeamCnt,
  });

  // 로그인 안 되어 있으면 main page로 리다이렉션
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedin");
  useEffect(() => {
    if (!isLoggedIn) {
      {
        console.log("로그인");
        navigate("/");
      }
    }
  }, [isLoggedIn, navigate]);

  return (
    <ListPageBackground>
      <ListWrap>
        {/* Tab 쪽 */}
        <FolderContainer>
          <FolderTab>
            <RegionSelectTab
              regionAnchorEl={regionAnchorEl}
              setRegionAnchorEl={setRegionAnchorEl}
              selectedRegion={selectedRegion}
              setselectedRegion={setselectedRegion}
              setRegion={setRegion}
            />
          </FolderTab>
          <FolderTab>
            <ClassSelectTab
              classAnchorEl={classAnchorEl}
              setClassAnchorEl={setClassAnchorEl}
              selectedClass={selectedClass}
              setSelectedClass={setSelectedClass}
              setClass={setClass}
              selectedRegion={selectedRegion}
              seoulLength={seoul_length}
              etcLength={etc_length}
            />
          </FolderTab>
        </FolderContainer>

        {/* 팀 선택 */}
        {!selectedRegion || !selectedClass ? (
          !selectedRegion ? (
            <TextBox>▲ 지역을 먼저 선택해주세요!</TextBox>
          ) : (
            <TextBox> 반을 선택해주세요! ▲</TextBox>
          )
        ) : (
          <>
            <TextBox>
              <NumInput
                type="number"
                min={1}
                max={15}
                defaultValue={selectedTeamCnt}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setSelectedTeamCnt(value.toString());
                  localStorage.setItem("teamCnt", value.toString());
                }}
              />
              개 팀 보기
            </TextBox>
            <ButtonList>
              {teamCodeList.map((team, idx) => (
                <TeamButton
                  key={idx}
                  onClick={() => window.open(team.teamServerAddress, "_blank")}
                >
                  {team.regionCodeName}
                  {selectedClass}
                  {String(idx + 1).padStart(2, "0")}
                </TeamButton>
              ))}
            </ButtonList>
          </>
        )}
      </ListWrap>
    </ListPageBackground>
  );
};

export default ServerListPage;
