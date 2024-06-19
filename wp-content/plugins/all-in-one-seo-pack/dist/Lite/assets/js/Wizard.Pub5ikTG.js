import{_ as e,s as r}from"./default-i18n.Bd0Z306Z.js";import{g as o,f as l}from"./links.C7Z9vJvv.js";import{a as u}from"./addons.CFmx_7nM.js";const t="all-in-one-seo-pack",m=()=>({strings:{skipThisStep:e("Skip this Step",t),goBack:e("Go Back",t),saveAndContinue:e("Save and Continue",t),closeAndExit:e("Close and Exit Wizard Without Saving",t),buildABetterAioseo:r(e("Build a Better %1$s",t),"AIOSEO"),getImprovedFeatures:r(e("Get improved features and faster fixes by sharing non-sensitive data via usage tracking that shows us how %1$s is being used. No personal data is tracked or stored.",t),"AIOSEO"),noThanks:e("No thanks",t),yesCountMeIn:e("Yes, count me in!",t)}}),s="all-in-one-seo-pack",g={data(){return{features:[{value:"optimized-search-appearance",name:e("Optimized Search Appearance",s),description:e("Get all the right tools to make sure your website shows up in Google Search.",s),required:!0,pro:!1,upgrade:!1},{value:"sitemaps",name:e("Sitemaps",s),description:e("Sitemaps are a list of all your content that search engines use when they crawl your site.",s),required:!0,pro:!1,upgrade:!1},{value:"broken-link-checker",name:e("Broken Link Checker",s),pluginName:e("Broken Link Checker",s),description:e("Get the best tool to monitor your site for broken links and easily fix them to improve your SEO.",s),installs:e("Installs Broken Link Checker",s),required:!1,pro:!1,upgrade:!1},{value:"analytics",name:e("Analytics",s),pluginName:e("MonsterInsights Free",s),description:e("Get the #1 analytics plugin to see how people find and use your website. Simply put, see stats that matter.",s),installs:e("Installs MonsterInsights Free",s),required:!1,pro:!1,upgrade:!1},{value:"conversion-tools",name:e("Conversion Tools",s),pluginName:e("OptinMonster",s),description:e("Get the #1 conversion optimization plugin to convert your growing website traffic into subscribers, leads and sales.",s),installs:e("Installs OptinMonster",s),required:!1,pro:!1,upgrade:!1},{value:"aioseo-image-seo",name:e("Image SEO",s),pluginName:e("Image SEO",s),description:e("Globally control the title, alt text, description and filename for attachment pages & images that are embedded in your content.",s),installs:e("Installs AIOSEO Image SEO",s),required:!1,pro:!0,upgrade:"aioseo-image-seo"},{value:"aioseo-eeat",name:e("Author SEO",s),pluginName:e("Author SEO (E-E-A-T)",s),description:e("Boost your SEO performance by highlighting the professional expertise and trustworthiness of your authors, aligning with Google's E-E-A-T standards.",s),installs:e("Installs AIOSEO Author SEO (E-E-A-T)",s),required:!1,pro:!0,upgrade:"aioseo-eeat"},{value:"aioseo-local-business",name:e("Local SEO",s),pluginName:e("Local Business SEO",s),description:e("Tell Google about your business for display as a Knowledge Graph card or business carousel.",s),installs:e("Installs AIOSEO Local SEO",s),required:!1,pro:!0,upgrade:"aioseo-local-business"},{value:"aioseo-video-sitemap",name:e("Video Sitemap",s),pluginName:e("Video Sitemap",s),description:e("Generate an XML Sitemap specifically for videos on your site to help search engines find them.",s),installs:e("Installs AIOSEO Video Sitemap",s),required:!1,pro:!0,upgrade:"aioseo-video-sitemap"},{value:"aioseo-news-sitemap",name:e("News Sitemap",s),pluginName:e("News Sitemap",s),description:e("Submit articles to Google News that were published in the last 48 hours.",s),installs:e("Installs AIOSEO News Sitemap",s),required:!1,pro:!0,upgrade:"aioseo-news-sitemap"},{value:"aioseo-redirects",name:e("Smart Redirects + 404 Detection",s),pluginName:e("Redirects",s),description:e("Create and manage redirects for your broken links.",s),installs:e("Installs AIOSEO Redirects",s),required:!1,pro:!0,upgrade:"aioseo-redirects"},{value:"aioseo-link-assistant",name:e("Link Assistant",s),pluginName:e("Link Assistant",s),description:e("Get relevant suggestions for adding internal links to older content as well as finding any orphaned posts that have no internal links.",s),installs:e("Installs AIOSEO Link Assistant",s),required:!1,pro:!0,upgrade:"aioseo-link-assistant"},{value:"aioseo-index-now",name:e("Index Now",s),pluginName:e("Index Now",s),description:e("Add IndexNow support to instantly notify search engines when your content has changed.",s),installs:e("Installs AIOSEO Index Now",s),required:!1,pro:!0,upgrade:"aioseo-index-now"},{value:"aioseo-rest-api",name:e("REST API",s),pluginName:e("REST API",s),description:e("Manage your post and term SEO meta via the WordPress REST API. This addon also works seamlessly with headless WordPress installs.",s),installs:e("Installs AIOSEO REST API",s),required:!1,pro:!0,upgrade:"aioseo-rest-api"},{value:"advanced-schema",name:e("Advanced Rich Snippets + Schema Markups",s),description:e("Complete support for schema markup so you can get more clicks and traffic with rich snippets.",s),required:!1,pro:!0,upgrade:!1}]}},computed:{getSelectedUpsellFeatures(){const a=o();return a.features?a.features.filter(n=>this.needsUpsell(this.features.find(i=>i.value===n))).map(n=>this.features.find(i=>i.value===n)):[]}},methods:{needsUpsell(a){return a.pro?l().isUnlicensed?!0:a.upgrade&&u.requiresUpgrade(a.upgrade):!1}},mounted(){const a=o();a.currentStage=this.stage}};export{g as W,m as u};
