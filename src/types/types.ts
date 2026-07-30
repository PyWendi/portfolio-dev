export interface SectionProps {
    title: String;
    without_margin?: Boolean;
}

export interface OutsideLinkProps {
    link: string;
    is_link_to_copy?: Boolean;
    tooltip_text?: string | null;
}

export interface ServiceCardProps {
    img_url: string;
    service_title: string;
    service_description: string;
}

export interface SkillsProps {
    card_title: string;
}


export interface ProjectCardProps {
    project_title: string;
    post: string;
    description: string;
    tecnhos: string[];
    with_source: boolean;
    source_url: string;
    with_preview: boolean;
    preview_url: string;
}
