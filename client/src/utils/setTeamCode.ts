interface SetTeamCodeProps {
  selectedRegion: string;
  selectedClass: string;
  classNum?: number;
}

export const setTeamCode = ({
  selectedRegion,
  selectedClass,
  classNum = 10,
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

  return Array.from({ length: classNum }, (_, i) => {
    const teamServerAddress = `${projectCode}13${regionCode}${selectedClass}0${
      i + 1
    }.${addressCode}`;
    return {
      ["regionCodeName"]: regionCodeName,
      ["teamServerAddress"]: teamServerAddress,
    };
  });
};
