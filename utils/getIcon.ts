import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

/**
 * Resolves a Lucide icon by name
 * @param iconName - The name of the icon (e.g., "Code", "Github", "ExternalLink")
 * @returns The matching LucideIcon component or Code as fallback
 */
export function getIcon(iconName: string): LucideIcon {
    const IconComponent = (Icons as unknown as Record<string, LucideIcon>)[iconName];
    return IconComponent || Icons.Code;
}
