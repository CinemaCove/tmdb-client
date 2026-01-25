export type CertificationMovieCountry =
    | 'AU'
    | 'BG'
    | 'BR'
    | 'CA'
    | 'CA-QC'
    | 'DE'
    | 'DK'
    | 'ES'
    | 'FI'
    | 'FR'
    | 'GB'
    | 'HU'
    | 'IN'
    | 'IT'
    | 'LT'
    | 'MY'
    | 'NL'
    | 'NO'
    | 'NZ'
    | 'PH'
    | 'PT'
    | 'RU'
    | 'SE'
    | 'US'
    | 'KR'
    | 'SK'
    | 'TH'
    | 'MX'
    | 'ID'
    | 'TR'
    | 'AR'
    | 'GR'
    | 'TW'
    | 'ZA'
    | 'SG'
    | 'IE'
    | 'PR'
    | 'JP'
    | 'VI'
    | 'CH'
    | 'IL'
    | 'HK'
    | 'MO'
    | 'LV'
    | 'LU'
    | 'CZ'
    | 'AT'
    | 'CL'
    | 'UA'
    | 'RO'
    | 'PL'
    | 'BE';
export type CertificationMovieItem = Readonly<{
    certification: string;
    meaning: string;
    order: number;
}>;
export type CertificationTVCountry =
    | 'NL'
    | 'KR'
    | 'RU'
    | 'PT'
    | 'CA-QC'
    | 'AR'
    | 'DE'
    | 'US'
    | 'CA'
    | 'AU'
    | 'TR'
    | 'GR'
    | 'VI'
    | 'UA'
    | 'NO'
    | 'IT'
    | 'FI'
    | 'NZ'
    | 'IN'
    | 'MA'
    | 'ES'
    | 'IE'
    | 'TH'
    | 'MY'
    | 'MX'
    | 'SG'
    | 'DK'
    | 'IL'
    | 'CH'
    | 'FR'
    | 'BR'
    | 'GB'
    | 'PH'
    | 'ZA'
    | 'SE'
    | 'CZ'
    | 'LT'
    | 'TW'
    | 'PL'
    | 'RO'
    | 'SK'
    | 'ID'
    | 'PR'
    | 'CL'
    | 'HU'
    | 'BG'
    | 'AT'
    | 'LU'
    | 'BE';

export type CertificationTVItem = Readonly<{
    certification: string;
    meaning: string;
    order: number;
}>;
export type CertificationMovieCertificationsResult = Readonly<{
    certifications: {
        [key in CertificationMovieCountry]: Readonly<CertificationMovieItem[]>;
    };
}>;
export type CertificationTVCertificationsResult = Readonly<{
    certifications: {
        [key in CertificationTVCountry]: Readonly<CertificationTVItem[]>;
    };
}>;
