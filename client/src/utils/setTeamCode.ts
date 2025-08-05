interface SetTeamCodeProps {
  selectedRegion: string;
  selectedClass: string;
  selectedTeamCnt: string;
}

export const setTeamCode = ({
  selectedRegion,
  selectedClass,
  selectedTeamCnt,
}: SetTeamCodeProps): { [key: string]: string }[] => {
  const regionMap: Record<string, string> = {
    서울: "SEOUL",
    대전: "DAEJEON",
    광주: "GWANGJU",
    구미: "GUMI",
    부울경: "BUG",
  };

  const regionKey = regionMap[selectedRegion];
  if (!regionKey) return [];

  const envKey = `VITE_${regionKey}_CAMPUS`;
  const regionCode = import.meta.env[envKey];
  const regionCodeName = regionCode.toUpperCase();
  if (!regionCode) return [];

  const projectCode = import.meta.env.VITE_PROJECT_1;
  const addressCode = import.meta.env.VITE_ADDRESS;

  return Array.from({ length: Number(selectedTeamCnt) }, (_, i) => {
    const teamServerAddress = `http://${projectCode}13${regionCode}${selectedClass}${
      i + 1 < 10 ? `0${i + 1}` : i + 1
    }.${addressCode}`;

    return {
      regionCodeName,
      teamServerAddress,
    };
  });
};
