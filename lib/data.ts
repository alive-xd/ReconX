import { 
  Search, Globe, Wifi, Shield, Server, 
  Cloud, HardDrive, Mail, User, Building, 
  Code, Package, Brain, Bug, Target,
  Activity, Database, ShieldAlert, BookOpen,
  Image as ImageIcon, MapPin, Smartphone, EyeOff, FileText,
  History, Fingerprint
} from "lucide-react"

export type Tool = {
  id: string
  name: string
  url: string
  categories: string[]
}

export type Category = {
  id: string
  name: string
  icon: any
}

export type Group = {
  id: string
  name: string
  categories: string[]
}

// All OSINT Tools (flattened)
export const osintTools: Tool[] = [
  // Shodan, Censys etc.
  { id: "shodan", name: "Shodan", url: "https://shodan.io", categories: ["Search Intelligence", "Infrastructure Intelligence", "Attack Surface Intelligence"] },
  { id: "censys", name: "Censys", url: "https://search.censys.io", categories: ["Search Intelligence", "Infrastructure Intelligence", "Cloud Intelligence", "Attack Surface Intelligence"] },
  { id: "fofa", name: "FOFA", url: "https://fofa.info", categories: ["Search Intelligence"] },
  { id: "netlas", name: "Netlas", url: "https://netlas.io", categories: ["Search Intelligence", "Infrastructure Intelligence"] },
  { id: "criminal_ip", name: "Criminal IP", url: "https://www.criminalip.io", categories: ["Search Intelligence"] },
  { id: "zoomeye", name: "ZoomEye", url: "https://www.zoomeye.org", categories: ["Search Intelligence"] },
  { id: "publicwww", name: "PublicWWW", url: "https://publicwww.com", categories: ["Search Intelligence"] },
  { id: "grayhatwarfare", name: "GrayHatWarfare", url: "https://grayhatwarfare.com", categories: ["Search Intelligence", "Cloud Intelligence", "Storage Intelligence"] },
  
  // Domain & DNS
  { id: "securitytrails", name: "SecurityTrails", url: "https://securitytrails.com", categories: ["Domain & DNS", "Passive DNS", "Subdomain Intelligence", "Infrastructure Intelligence", "Attack Surface Intelligence"] },
  { id: "whoisxml", name: "WhoisXML API", url: "https://whoisxmlapi.com", categories: ["Domain & DNS"] },
  { id: "icann", name: "ICANN Lookup", url: "https://lookup.icann.org", categories: ["Domain & DNS"] },
  { id: "viewdns", name: "ViewDNS", url: "https://viewdns.info", categories: ["Domain & DNS"] },
  { id: "dnsdumpster", name: "DNSDumpster", url: "https://dnsdumpster.com", categories: ["Domain & DNS"] },
  { id: "mxtoolbox", name: "MXToolbox", url: "https://mxtoolbox.com", categories: ["Domain & DNS"] },
  { id: "dnsdb", name: "DNSDB", url: "https://www.farsightsecurity.com/solutions/dnsdb/", categories: ["Passive DNS"] },
  { id: "passivetotal", name: "RiskIQ PassiveTotal", url: "https://community.riskiq.com", categories: ["Passive DNS"] },
  { id: "virustotal", name: "VirusTotal", url: "https://virustotal.com", categories: ["Passive DNS", "Subdomain Intelligence", "Threat Intelligence", "IOC Investigation", "Malware Intelligence"] },
  
  // CT & Subdomains
  { id: "crtsh", name: "crt.sh", url: "https://crt.sh", categories: ["Certificate Transparency", "Subdomain Intelligence"] },
  { id: "censys_certs", name: "Censys Certificates", url: "https://search.censys.io/certificates", categories: ["Certificate Transparency"] },
  { id: "sslmate", name: "SSLMate CT Search", url: "https://sslmate.com/certspotter", categories: ["Certificate Transparency"] },
  { id: "chaos", name: "Chaos", url: "https://chaos.projectdiscovery.io", categories: ["Subdomain Intelligence"] },
  { id: "rapiddns", name: "RapidDNS", url: "https://rapiddns.io", categories: ["Subdomain Intelligence"] },
  { id: "bufferover", name: "BufferOver", url: "https://tls.bufferover.run", categories: ["Subdomain Intelligence"] },

  // IP & ASN
  { id: "abuseipdb", name: "AbuseIPDB", url: "https://www.abuseipdb.com", categories: ["IP & ASN Intelligence", "Threat Intelligence", "IOC Investigation"] },
  { id: "greynoise", name: "GreyNoise", url: "https://www.greynoise.io", categories: ["IP & ASN Intelligence", "Threat Intelligence", "IOC Investigation"] },
  { id: "ipinfo", name: "IPinfo", url: "https://ipinfo.io", categories: ["IP & ASN Intelligence"] },
  { id: "hurricane_electric", name: "Hurricane Electric (BGP)", url: "https://bgp.he.net", categories: ["IP & ASN Intelligence", "Infrastructure Intelligence"] },
  { id: "ripestat", name: "RIPEstat", url: "https://stat.ripe.net", categories: ["IP & ASN Intelligence"] },
  { id: "arin", name: "ARIN", url: "https://search.arin.net", categories: ["IP & ASN Intelligence"] },

  // Web, Cloud, Storage
  { id: "wappalyzer", name: "Wappalyzer", url: "https://wappalyzer.com", categories: ["Web Technology Intelligence"] },
  { id: "builtwith", name: "BuiltWith", url: "https://builtwith.com", categories: ["Web Technology Intelligence"] },
  { id: "urlscan", name: "URLScan", url: "https://urlscan.io", categories: ["Web Technology Intelligence"] },
  { id: "netcraft", name: "Netcraft", url: "https://sitereport.netcraft.com", categories: ["Web Technology Intelligence", "Cloud Intelligence"] },
  { id: "s3scanner", name: "S3Scanner", url: "https://github.com/sa7mon/S3Scanner", categories: ["Storage Intelligence"] },

  // Identity & Email
  { id: "hunter", name: "Hunter", url: "https://hunter.io", categories: ["Email Intelligence"] },
  { id: "phonebook", name: "Phonebook.cz", url: "https://phonebook.cz", categories: ["Email Intelligence"] },
  { id: "emailrep", name: "EmailRep", url: "https://emailrep.io", categories: ["Email Intelligence"] },
  { id: "hibp", name: "Have I Been Pwned", url: "https://haveibeenpwned.com", categories: ["Email Intelligence"] },
  { id: "sherlock", name: "Sherlock", url: "https://github.com/sherlock-project/sherlock", categories: ["Username Intelligence"] },
  { id: "maigret", name: "Maigret", url: "https://github.com/soxoj/maigret", categories: ["Username Intelligence"] },
  { id: "whatsmyname", name: "WhatsMyName", url: "https://whatsmyname.app", categories: ["Username Intelligence"] },
  
  // Company, Source, Packages
  { id: "opencorporates", name: "OpenCorporates", url: "https://opencorporates.com", categories: ["Company Intelligence"] },
  { id: "crunchbase", name: "Crunchbase", url: "https://crunchbase.com", categories: ["Company Intelligence"] },
  { id: "github_search", name: "GitHub Search", url: "https://github.com/search", categories: ["Source Code Intelligence"] },
  { id: "sourcegraph", name: "Sourcegraph", url: "https://sourcegraph.com", categories: ["Source Code Intelligence"] },
  { id: "grepapp", name: "grep.app", url: "https://grep.app", categories: ["Source Code Intelligence"] },
  { id: "gitlab_search", name: "GitLab Search", url: "https://gitlab.com/search", categories: ["Source Code Intelligence"] },
  { id: "socketdev", name: "Socket.dev", url: "https://socket.dev", categories: ["Package Intelligence"] },
  { id: "depsdev", name: "deps.dev", url: "https://deps.dev", categories: ["Package Intelligence"] },

  // Threat & Malware
  { id: "otx", name: "AlienVault OTX", url: "https://otx.alienvault.com", categories: ["Threat Intelligence"] },
  { id: "threatfox", name: "ThreatFox", url: "https://threatfox.abuse.ch", categories: ["Threat Intelligence", "IOC Investigation"] },
  { id: "malwarebazaar", name: "MalwareBazaar", url: "https://bazaar.abuse.ch", categories: ["Threat Intelligence", "Malware Intelligence"] },
  { id: "urlhaus", name: "URLhaus", url: "https://urlhaus.abuse.ch", categories: ["Threat Intelligence", "IOC Investigation"] },
  { id: "pulsedive", name: "Pulsedive", url: "https://pulsedive.com", categories: ["Threat Intelligence"] },
  { id: "hybrid_analysis", name: "Hybrid Analysis", url: "https://hybrid-analysis.com", categories: ["Malware Intelligence"] },

  // Sandbox, Vulns, Exploits
  { id: "anyrun", name: "ANY.RUN", url: "https://any.run", categories: ["Sandbox Analysis"] },
  { id: "joesandbox", name: "Joe Sandbox", url: "https://www.joesecurity.org", categories: ["Sandbox Analysis"] },
  { id: "triage", name: "Triage", url: "https://tria.ge", categories: ["Sandbox Analysis"] },
  { id: "nvd", name: "NVD", url: "https://nvd.nist.gov", categories: ["Vulnerability Intelligence"] },
  { id: "vulncheck", name: "VulnCheck", url: "https://vulncheck.com", categories: ["Vulnerability Intelligence"] },
  { id: "cveorg", name: "CVE.org", url: "https://cve.org", categories: ["Vulnerability Intelligence"] },
  { id: "cvedetails", name: "CVE Details", url: "https://www.cvedetails.com", categories: ["Vulnerability Intelligence"] },
  { id: "exploitdb", name: "Exploit-DB", url: "https://www.exploit-db.com", categories: ["Exploit Intelligence"] },
  { id: "gh_advisories", name: "GitHub Security Advisories", url: "https://github.com/advisories", categories: ["Exploit Intelligence"] },

  // Analysis / Other
  { id: "wayback", name: "Wayback Machine", url: "https://web.archive.org", categories: ["Historical Intelligence"] },
  { id: "archive_today", name: "Archive.today", url: "https://archive.ph", categories: ["Historical Intelligence"] },
  { id: "commoncrawl", name: "Common Crawl", url: "https://commoncrawl.org", categories: ["Historical Intelligence"] },
  { id: "exiftool", name: "ExifTool", url: "https://exiftool.org", categories: ["Metadata Intelligence"] },
  { id: "foca", name: "FOCA", url: "https://github.com/ElevenPaths/FOCA", categories: ["Metadata Intelligence"] },
  { id: "google_lens", name: "Google Lens", url: "https://lens.google", categories: ["Image Intelligence"] },
  { id: "tineye", name: "TinEye", url: "https://tineye.com", categories: ["Image Intelligence"] },
  { id: "yandex_images", name: "Yandex Images", url: "https://yandex.com/images", categories: ["Image Intelligence"] },
  { id: "google_earth", name: "Google Earth", url: "https://earth.google.com", categories: ["GEOINT"] },
  { id: "osm", name: "OpenStreetMap", url: "https://www.openstreetmap.org", categories: ["GEOINT"] },
  { id: "sentinel_hub", name: "Sentinel Hub", url: "https://www.sentinel-hub.com", categories: ["GEOINT"] },
  { id: "zoom_earth", name: "Zoom Earth", url: "https://zoom.earth", categories: ["GEOINT"] },
  { id: "mobsf", name: "MobSF", url: "https://github.com/MobSF/Mobile-Security-Framework-MobSF", categories: ["Mobile Intelligence"] },
  { id: "apkmirror", name: "APKMirror", url: "https://www.apkmirror.com", categories: ["Mobile Intelligence"] },
  { id: "ahmia", name: "Ahmia", url: "https://ahmia.fi", categories: ["Dark Web Intelligence"] },
  { id: "intelx", name: "Intelligence X", url: "https://intelx.io", categories: ["Dark Web Intelligence"] },

  // References
  { id: "mitre_attack", name: "MITRE ATT&CK", url: "https://attack.mitre.org", categories: ["References"] },
  { id: "attack_navigator", name: "ATT&CK Navigator", url: "https://mitre-attack.github.io/attack-navigator", categories: ["References"] },
  { id: "cyberchef", name: "CyberChef", url: "https://gchq.github.io/CyberChef", categories: ["References"] },
  { id: "cvss", name: "CVSS Calculator", url: "https://www.first.org/cvss/calculator/4.0", categories: ["References"] },
  { id: "owasp_cheat", name: "OWASP Cheat Sheet", url: "https://cheatsheetseries.owasp.org", categories: ["References"] },
  { id: "rfc_editor", name: "RFC Editor", url: "https://www.rfc-editor.org", categories: ["References"] }
]

export const categories: Record<string, Category> = {
  "Search Intelligence": { id: "Search Intelligence", name: "Search Intelligence", icon: Search },
  "Infrastructure Intelligence": { id: "Infrastructure Intelligence", name: "Infrastructure Intelligence", icon: Server },
  "Domain & DNS": { id: "Domain & DNS", name: "Domain & DNS", icon: Globe },
  "Passive DNS": { id: "Passive DNS", name: "Passive DNS", icon: History },
  "Certificate Transparency": { id: "Certificate Transparency", name: "Certificate Transparency", icon: Shield },
  "Subdomain Intelligence": { id: "Subdomain Intelligence", name: "Subdomain Intelligence", icon: Wifi },
  "IP & ASN Intelligence": { id: "IP & ASN Intelligence", name: "IP & ASN", icon: MapPin },
  "Web Technology Intelligence": { id: "Web Technology Intelligence", name: "Web Technology", icon: Code },
  "Cloud Intelligence": { id: "Cloud Intelligence", name: "Cloud Intelligence", icon: Cloud },
  "Storage Intelligence": { id: "Storage Intelligence", name: "Storage Intelligence", icon: HardDrive },
  
  "Email Intelligence": { id: "Email Intelligence", name: "Email Intelligence", icon: Mail },
  "Username Intelligence": { id: "Username Intelligence", name: "Username Intelligence", icon: User },
  "Company Intelligence": { id: "Company Intelligence", name: "Company Intelligence", icon: Building },
  "Source Code Intelligence": { id: "Source Code Intelligence", name: "Source Code", icon: Code },
  "Package Intelligence": { id: "Package Intelligence", name: "Package Intelligence", icon: Package },

  "Threat Intelligence": { id: "Threat Intelligence", name: "Threat Intelligence", icon: Brain },
  "IOC Investigation": { id: "IOC Investigation", name: "IOC Investigation", icon: Target },
  "Malware Intelligence": { id: "Malware Intelligence", name: "Malware Intelligence", icon: Bug },
  "Sandbox Analysis": { id: "Sandbox Analysis", name: "Sandbox Analysis", icon: Activity },
  "Vulnerability Intelligence": { id: "Vulnerability Intelligence", name: "Vulnerability", icon: ShieldAlert },
  "Exploit Intelligence": { id: "Exploit Intelligence", name: "Exploits", icon: Target },
  
  "Attack Surface Intelligence": { id: "Attack Surface Intelligence", name: "Attack Surface", icon: Database },
  "Historical Intelligence": { id: "Historical Intelligence", name: "Historical Intelligence", icon: History },
  "Metadata Intelligence": { id: "Metadata Intelligence", name: "Metadata Intelligence", icon: FileText },
  "Image Intelligence": { id: "Image Intelligence", name: "Image Intelligence", icon: ImageIcon },
  "GEOINT": { id: "GEOINT", name: "GEOINT", icon: Globe },
  "Mobile Intelligence": { id: "Mobile Intelligence", name: "Mobile Intelligence", icon: Smartphone },
  "Dark Web Intelligence": { id: "Dark Web Intelligence", name: "Dark Web Intelligence", icon: EyeOff },
  
  "References": { id: "References", name: "References", icon: BookOpen }
}

export const groups: Group[] = [
  {
    id: "discovery",
    name: "Discovery",
    categories: [
      "Search Intelligence",
      "Domain & DNS",
      "Passive DNS",
      "Certificate Transparency",
      "Subdomain Intelligence"
    ]
  },
  {
    id: "infrastructure",
    name: "Infrastructure",
    categories: [
      "Infrastructure Intelligence",
      "IP & ASN Intelligence",
      "Web Technology Intelligence",
      "Cloud Intelligence",
      "Storage Intelligence"
    ]
  },
  {
    id: "intelligence",
    name: "Intelligence",
    categories: [
      "Threat Intelligence",
      "IOC Investigation",
      "Malware Intelligence",
      "Sandbox Analysis",
      "Vulnerability Intelligence",
      "Exploit Intelligence"
    ]
  },
  {
    id: "identity",
    name: "Identity",
    categories: [
      "Email Intelligence",
      "Username Intelligence",
      "Company Intelligence",
      "Source Code Intelligence",
      "Package Intelligence"
    ]
  },
  {
    id: "analysis",
    name: "Analysis",
    categories: [
      "Historical Intelligence",
      "Metadata Intelligence",
      "Image Intelligence",
      "GEOINT",
      "Mobile Intelligence",
      "Dark Web Intelligence"
    ]
  },
  {
    id: "resources",
    name: "Resources",
    categories: [
      "References"
    ]
  }
]
