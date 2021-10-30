function dataEng() {
  //Header
  document.getElementById("main_navbar").innerHTML = "Main";
  document.getElementById("about_us_navbar").innerHTML = "About Us";
  document.getElementById("portfolio_navbar").innerHTML = "Portfolio";
  document.getElementById("directions_navbar").innerHTML = "Our Directions";
  document.getElementById("our_projects").innerHTML = "Our Projects";
  document.getElementById("support_devops_navbar").innerHTML = "Support DevOps";
  document.getElementById("navBtn").innerHTML = "More Details";
  document.getElementById("contact_us").innerHTML = "Contact Us";

  //INDEX
  document.getElementById("devMobApp").innerHTML = "Mobile App Development";

  document.getElementById("devMobApp_text").innerHTML =
    "We develop applications of any complexity and functionality for" +
    "small and medium businesses, corporations and startups. We will help" +
    "create or modify your business project in a fast growing" +
    "mobile environment IOS and Android.";

  document.getElementById("expert_team").innerHTML = "Expert team";

  document.getElementById("expert_team_text").innerHTML =
    "Mobile Solutions - experts software developers" +
    ": architects, analysts," +
    "programmers, testers, systems engineers and managers with" +
    "successful experience in the implementation and launch of international and" +
    "Russian projects. Our company is distinguished by the highest" +
    "level, creativity, flexibility, openness," +
    "honesty, focus on impeccable quality and the desire to make the impossible possible.";

  document.getElementById("index_useful_apps").innerHTML = "Useful Apps";

  document.getElementById("index_useful_apps_text").innerHTML =
    "Our products always work for the result. They are reliable" +
    "exclusive, intuitive for users, different" +
    " wide integration, functionality and modern design." +
    "We help businesses grow and earn money.";

  document.getElementById("web_apps").innerHTML = "Web Apps";

  document.getElementById("web_apps_text").innerHTML =
    "Corporate, analytical, CRM systems, marketplaces," +
    " educational platforms and more. We have enough" +
    "competencies, opportunities and skills to implement any" +
    "needs for digitalization of business processes, customize them" +
    "for specific tasks.";

  document.getElementById("android_apps").innerHTML = "Android apps";

  document.getElementById("android_apps_text").innerHTML =
    "Hundreds of millions users visit stores every week" +
    "applications based on Android. They are your potential" +
    " clients. Just tell us what you are ready to offer and we" +
    "help you become part of a highly profitable digital environment.";

  document.getElementById("ios_apps").innerHTML = "iOS Apps";

  document.getElementById("ios_apps_text").innerHTML =
    "We implement mobile solutions from scratch that are easy" +
    "integrate with the latest achievements of Apple platforms: IOS," +
    "iPadOS, macOS, tvOS, and watchOS. Let's bring it to perfection" +
    "unstable or outdated product.";

  document.getElementById("make_ux").innerHTML = "UX Design";

  document.getElementById("make_ux_text").innerHTML =
    "Our designers know how to make a software product" +
    "unique and memorable, but at the same time functional," +
    " convenient for the client and selling. Flawless logic" +
    " creative approach, clear and aesthetic interface, lightness" +
    " on the way to the goal - the basis of design from the Mobile company" +
    "Solutions.";

  document.getElementById("logo_make").innerHTML = "Logo Design";

  document.getElementById("logo_make_text").innerHTML =
    "Each person's face is unique and recognizable. The logo is" +
    "the face of the company. Our work on" +
    "creating a unique image of your business. We just" +
    "add to this an impeccable combination of beauty, color," +
    "forms and meaning to fill it with life.";

  document.getElementById("dev_make").innerHTML = "DevOps Support";

  document.getElementById("dev_make_text").innerHTML =
    "Seamless organization of all development processes - from" +
    "  design to support the finished product. We will provide" +
    "quick entry to the market, adaptation to changing conditions and" +
    "  competition, software solution stability, reduction" +
    "  recovery time.";
  document.getElementById("dev_exp").innerHTML = "development experience";

  document.getElementById("expert_team").innerHTML = "Expert team";

  document.getElementById("index_company_text").innerHTML =
    "Mobile Solutions is a team of highly qualified" +
    "specialists creating exclusive and reliable software" +
    "provision for your purposes.";

  document.getElementById("index_unic_prod").innerHTML =
    "Uniqueness of products";

  document.getElementById("index_unic_prod_text").innerHTML =
    "Everything we do is verified and thought out to the smallest detail," +
    " from visual to technical" +
    "nuances. You will receive an author's product, jewelry" +
    " customized for specific goals.";

  document.getElementById("high_perf").innerHTML = "High Perfomance";

  document.getElementById("high_perf_text").innerHTML =
    "This applies equally to software development" +
    "from Mobile Solutions, and to the development team. Following" +
    "trends of the modern world, they are a priori sharpened on" +
    "heavy workload, which they do well.";

  document.getElementById("client_serv").innerHTML = "Customer service";

  document.getElementById("cust_serv_text").innerHTML =
    "Every our customer is priceless, so we are available 24/7." +
    "We will provide software support and development" +
    "provision, we will answer any questions.";

  document.getElementById("usab").innerHTML = "Great usability";

  document.getElementById("usab_text").innerHTML =
    "We scrupulously work on energy and design" +
    "applications. They are as clear and comfortable as possible for" +
    " user, which will ensure a constant influx of new" +
    "clients.";

  //FOOTER

  document.getElementById("footer_text").innerHTML =
    "Our company specializes on creating functional," +
    "convenient and reliable business software" +
    "any level in any area. As part of the Mobile team" +
    "Solutions only highly qualified specialists" +
    "with experience in implementing large international projects.";

  document.getElementById("footer_quest").innerHTML = "Questions? Write to us";

  document.getElementById("footer_form_mess").innerHTML = "Message";

  document.getElementById("footer_send_mess").innerHTML = "Send message";

  document.getElementById("footer_what_me_do").innerHTML = "What do we offer";

  document.getElementById("footer_web").innerHTML = "Web development";

  document.getElementById("footer_andr").innerHTML = "Android development";

  document.getElementById("footer_ios").innerHTML = "iOS development";

  document.getElementById("footer_ux").innerHTML = "UX Design";

  document.getElementById("footer_dev").innerHTML = "DevOps Support";
}

function changeToEng() {
  let button_eng = document.getElementById("button-eng");
  button_eng.addEventListener("click", dataEng);
}
