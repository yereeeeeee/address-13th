import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface ClassSelectTabProps {
  classAnchorEl: HTMLElement | null;
  setClassAnchorEl: (el: HTMLElement | null) => void;
  selectedClass: string;
  setSelectedClass: (value: string) => void;
  setClass: (value: string) => void;
  selectedRegion: string;
  seoulLength: number;
  etcLength: number;
}

const ClassSelectTab = ({
  classAnchorEl,
  setClassAnchorEl,
  selectedClass,
  setSelectedClass,
  setClass,
  selectedRegion,
  seoulLength,
  etcLength,
}: ClassSelectTabProps) => {
  const length = selectedRegion === "서울" ? seoulLength : etcLength;

  return (
    <div>
      <button
        id="class-button"
        aria-controls={Boolean(classAnchorEl) ? "class-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(classAnchorEl) ? "true" : undefined}
        onClick={(e) => setClassAnchorEl(e.currentTarget)}
        disabled={!selectedRegion}
      >
        {selectedClass ? `${selectedClass}반` : "반 선택 ▼"}
      </button>
      <Menu
        id="class-menu"
        anchorEl={classAnchorEl}
        open={Boolean(classAnchorEl)}
        onClose={() => setClassAnchorEl(null)}
        slotProps={{
          list: {
            "aria-labelledby": "class-button",
          },
        }}
      >
        {Array.from({ length }).map((_, i) => {
          const classStr = (i + 1).toString();
          return (
            <MenuItem
              key={i}
              onClick={() => {
                setClass(classStr);
                setSelectedClass(classStr);
                setClassAnchorEl(null);
              }}
            >
              {classStr}반
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default ClassSelectTab;
