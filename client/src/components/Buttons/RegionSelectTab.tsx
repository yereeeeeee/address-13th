import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

interface RegionSelectTabProps {
  regionAnchorEl: HTMLElement | null;
  setRegionAnchorEl: (el: HTMLElement | null) => void;
  selectedRegion: string;
  setselectedRegion: (value: string) => void;
  setRegion: (value: string) => void;
}

const RegionSelectTab = ({
  regionAnchorEl,
  setRegionAnchorEl,
  selectedRegion,
  setselectedRegion,
  setRegion,
}: RegionSelectTabProps) => {
  return (
    <div>
      <button
        id="region-button"
        aria-controls={Boolean(regionAnchorEl) ? "region-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={Boolean(regionAnchorEl) ? "true" : undefined}
        onClick={(e) => setRegionAnchorEl(e.currentTarget)}
      >
        {selectedRegion || "지역 선택 ▼"}
      </button>
      <Menu
        id="region-menu"
        anchorEl={regionAnchorEl}
        open={Boolean(regionAnchorEl)}
        onClose={() => setRegionAnchorEl(null)}
        slotProps={{
          list: {
            "aria-labelledby": "region-button",
          },
        }}
      >
        {["서울", "대전", "광주", "구미", "부울경"].map((region) => (
          <MenuItem
            key={region}
            onClick={() => {
              setRegion(region);
              setselectedRegion(region);
              setRegionAnchorEl(null);
            }}
          >
            {region}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default RegionSelectTab;
