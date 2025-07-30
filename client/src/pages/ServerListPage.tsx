import { useEffect, useState } from "react";

// styles
import ListPageBackground from "@/styles/ListPageBackground";
import ListWrap from "@/styles/ListWrap";
import ButtonList from "@/styles/ButtonList";
import TeamButton from "@/components/Buttons/TeamButton";
import { FolderContainer, FolderBody, FolderTab } from "@/styles/FolderBox";

// hooks
import setClass from "@/hooks/setClass";
import setRegion from "@/hooks/setRegion";
import { setTeamCode } from "@/utils/setTeamCode";

// components
import RegionSelectTab from "@/components/Buttons/RegionSelectTab";
import ClassSelectTab from "@/components/Buttons/ClassSelectTab";

const seoul_length = 7;
const etc_length = 2;

const ServerListPage = () => {
  const [selectedRegion, setselectedRegion] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    setselectedRegion(localStorage.getItem("region") ?? "");
    setSelectedClass(localStorage.getItem("class") ?? "");
  });

  // dropdown menu
  const [regionAnchorEl, setRegionAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const [classAnchorEl, setClassAnchorEl] = useState<null | HTMLElement>(null);

  // team code
  const teamCodeList = setTeamCode({ selectedRegion, selectedClass });
  console.log(teamCodeList);

  return (
    <ListPageBackground>
      <ListWrap>
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
        <ButtonList>
          {teamCodeList.map((team, idx) => (
            <TeamButton
              key={idx}
              onClick={() => (window.location.href = team.teamServerAddress)}
            >
              {team.regionCodeName}
              {selectedClass}
              {String(idx + 1).padStart(2, "0")}
            </TeamButton>
          ))}
        </ButtonList>
      </ListWrap>
    </ListPageBackground>
  );
};

export default ServerListPage;
