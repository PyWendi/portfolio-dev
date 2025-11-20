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