import { Dimension } from './dimensions';
export type Municipality={id:string;name:string;department:string;country:string;is_active:boolean;created_at:string};
export type Question={id:string;municipality_id:string|null;question_text:string;option_a_text:string;option_a_dimension:Dimension;option_b_text:string;option_b_dimension:Dimension;option_c_text:string;option_c_dimension:Dimension;option_d_text:string;option_d_dimension:Dimension;is_active:boolean;created_at:string};
export type Candidate={id:string;municipality_id:string;name:string;party:string;photo_url:string|null;plan_pdf_url:string|null;summary:string|null;is_active:boolean;created_at:string;candidate_scores?:CandidateScore[]};
export type CandidateScore={id:string;candidate_id:string;analysis_json:any;created_at:string}&Record<Dimension,number>;
