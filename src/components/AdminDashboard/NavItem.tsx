import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/router";

interface Props {
  onClick: (section: string) => void;
  label: string;
  section: string;
  icon: LucideIcon;
}

function NavItem({ onClick, section, icon: Icon, label }: Props) {
  const router = useRouter();
  const { section: currentSection } = router.query;
  const isActive =
    currentSection === section || (!currentSection && section === "dashboard");

  return (
    <li
      onClick={() => onClick(section)}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-md px-4 py-2 font-medium",
        isActive
          ? "bg-primary text-primary-content"
          : "text-base-content hover:bg-primary/15",
      )}
    >
      <Icon className="size-6" />
      {label}
    </li>
  );
}

export default NavItem;
