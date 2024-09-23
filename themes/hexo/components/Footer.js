import { useState } from 'react';
import { siteConfig } from '@/lib/config';

const Footer = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const d = new Date();
  const currentYear = d.getFullYear();
  const since = siteConfig('SINCE');
  const copyrightDate = parseInt(since) < currentYear ? `${since}-${currentYear}` : currentYear;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <footer className='relative z-10 dark:bg-black flex-shrink-0 bg-hexo-light-gray text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm p-6'>
      <i className='fas fa-copyright' /> {`${copyrightDate}`}
      <span>
        <i className='mx-1 animate-pulse fas fa-heart' />{' '}
        <h2 style={{ all: 'unset' }}>
          <a href={siteConfig('LINK')} className='font-bold dark:text-gray-300 hover:underline'>
            {siteConfig('AUTHOR')}
          </a>
        </h2>
        <br />
        {siteConfig('BEI_AN') && (
          <>
            <i className='fas fa-shield-alt' />{' '}
            <a href='https://beian.miit.gov.cn/' className='mr-2'>
              {siteConfig('BEI_AN')}
            </a>
            <br />
          </>
        )}
        <span className='hidden busuanzi_container_site_pv'>
          <i className='fas fa-eye' />
          <span className='px-1 busuanzi_value_site_pv'> </span>
        </span>
        <span className='pl-2 hidden busuanzi_container_site_uv'>
          <i className='fas fa-users' /> <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
        </span>
        <p className='text-xs pt-4 text-light-400 dark:text-gray-400'>
          {title} {siteConfig('BIO') && <>|</>} {siteConfig('BIO')}
        </p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
          Copyright © 2007-2024{' '}
          <a href='https://www.sugardaddymeet-nz.com' className='dark:text-gray-300'>
            sugardaddymeet-nz.com
          </a>
          , INC. All rights reserved.
        </p>
        <p className='text-xs pt-2 text-light-500 dark:text-gray-500'>
          Disclaimer: You must be over 19 to join. SugarDaddyMeet-NZ is not an escort service. SugarDaddyMeet-NZ does not support escorts or prostitution. Profiles that may violate these terms and services will be banned.
        </p>
      </span>

      {/* Divider Line */}
      <div className='border-t border-gray-300 dark:border-gray-600 my-4 mx-4'></div>

       {/* Columns */}
      <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 text-xs text-light-500 dark:text-gray-500'>
        {/* Column 1 */}
        <div className='flex flex-col text-left space-y-0.5'>
          <h3 className='font-bold mb-2'>OUR COMPANY</h3>
          <a href='/company/about-us' className='hover:underline' rel='nofollow'>About Us</a>
          <a href='/support/feedbacks' className='hover:underline' rel='nofollow'>Contact Us</a>
          <a href='/support/faq' className='hover:underline' rel='nofollow'>Help and FAQ</a>
          <a href='https://www.sugardaddymeet.com/affiliate/?tid=af100028782' className='hover:underline' rel='nofollow'>Become an Affiliate</a>
        </div>
        
        {/* Column 2 */}
        <div className='flex flex-col text-left space-y-0.5'>
          <h3 className='font-bold mb-2'>SAFETY</h3>
          <a href='/safety/privacy-policy' className='hover:underline' rel='nofollow'>Privacy Policy</a>
          <a href='/safety/service-agreement' className='hover:underline' rel='nofollow'>Service Agreement</a>
          <a href='/safety/notice-of-collection' className='hover:underline' rel='nofollow'>Notice of Collection</a>
          <a href='/safety/community-guidelines' className='hover:underline' rel='nofollow'>Community Guidelines</a>
          <a href='/safety/fighting-human-trafficking' className='hover:underline' rel='nofollow'>Stop Sex & Human Trafficking</a>
          <a href='/safety/no-sell-or-share' className='hover:underline' rel='nofollow'>Right to Opt-Out</a>
        </div>
        
        {/* Column 3 */}
        <div className='flex flex-col text-left space-y-0.5'>
          <h3 className='font-bold mb-2'>OTHER DATING LOCATIONS</h3>
          <a href='https://www.sugardaddymeet.website' target='_blank' className='hover:underline block'>Sugar Daddy USA</a>
          <a href='https://www.sugar-daddy-canada.com' target='_blank' className='hover:underline block'>Sugar Daddy Canada</a>
          <a href='https://www.sugar-daddy-meet-au.com' target='_blank' className='hover:underline block'>Sugar Daddy Australia</a>
          <a href='https://www.sugar-daddy-meet.nl' target='_blank' className='hover:underline block'>Sugar Daddy Netherlands</a>
          <a href='https://www.sugardaddymeet-nz.com' target='_blank' className='hover:underline block'>Sugar Daddy New Zealand</a>
          <div className={`extra-links ${isExpanded ? 'show' : 'hide'}`}>
           <a href='https://www.sugar-daddy-ae.com' target='_blank' className='hover:underline block'>Sugar Daddy UAE</a>
            <a href='https://www.sugardaddymeetsg.com' target='_blank' className='hover:underline block'>Sugar Daddy Singapore</a>
          </div>
          <button onClick={toggleExpand} className='pt-2 text-left text-light-500 dark:text-gray-500'>
            {isExpanded ? '<< Less' : 'More >>'}
          </button>
        </div>
        
        {/* Column 4 */}
        <div className='flex flex-col text-left space-y-0.5'>
          <h3 className='font-bold mb-2'>FRIENDLY LINKS</h3>
          <a href='https://www.olderwoman-sugardaddy.com' target='_blank' className='hover:underline block'>
            Date Older Women
          </a>
        </div>

        {/* Column 5 */}
        <div className='flex flex-col text-left space-y-0.5'>
          <h3 className='font-bold mb-2'>DOWNLOAD APP</h3>
          <div className='flex justify-start space-x-2'>
            <a href='https://www.sugardaddymeet.com/registerStep1?tid=af100028782_qqxx' target='_blank' rel='nofollow'>
              <img src='https://raw.githubusercontent.com/icon-other/icon/main/download/App%20Store.png' alt='Download By App Store' className='w-24 h-auto' />
            </a>
            <a href='https://www.sugardaddymeet.com/registerStep1?tid=af100028782_qqxx' target='_blank' rel='nofollow'>
              <img src='https://raw.githubusercontent.com/icon-other/icon/main/download/Google%20Play.png' alt='Download By Google Play' className='w-24 h-auto' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
