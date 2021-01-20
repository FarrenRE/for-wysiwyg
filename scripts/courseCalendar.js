/**
 * IQ Course Calendar HTML generator
 *  Input: JSON course data *sorted by date* from https://admaau.lightning.force.com/lightning/r/Report/00O2v00000LzqpgEAB/view
 */
let debug = true;
(()=>{
  const courseData = [{"id":"01t2v00000CBNJ4","type":"Short Courses","subtype":"Retention Marketing Strategy","startDate":"1/12/2020","topic":"Digital Marketing"},{"id":"01t2v00000CBN8c","type":"Short Courses","subtype":"Writing for Content Marketing","startDate":"2/12/2020","topic":"Copywriting & Creative"},{"id":"01t2v00000DdlbV","type":"Short Courses","subtype":"Privacy and Marketing Compliance","startDate":"7/12/2020","topic":"Responsible Marketing"},{"id":"01t2v00000D3GZd","type":"Short Courses","subtype":"Digital Marketing Essentials","startDate":"9/2/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZe","type":"Short Courses","subtype":"Customer Journey Mapping","startDate":"10/2/2021","topic":"Customer Experience"},{"id":"01t2v00000D3GZf","type":"Certificate Courses","subtype":"Digital Marketing Certificate","startDate":"11/2/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZg","type":"Short Courses","subtype":"Content Marketing Strategy","startDate":"11/2/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GZj","type":"Certificate Courses","subtype":"Data-driven Marketing Certificate","startDate":"17/02/2021","topic":"Data-driven Marketing"},{"id":"01t2v00000D3GZh","type":"Short Courses","subtype":"Copywriting Essentials","startDate":"18/02/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3GZi","type":"Short Courses","subtype":"Social Media Marketing Strategy","startDate":"18/02/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GaE","type":"Short Courses","subtype":"Retention Marketing Strategy","startDate":"23/02/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZk","type":"Short Courses","subtype":"SEO Fundamentals","startDate":"24/02/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GZl","type":"Short Courses","subtype":"Digital Marketing Strategy","startDate":"2/3/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZm","type":"Short Courses","subtype":"Data-Driven Marketing & Advertising","startDate":"9/3/2021","topic":"Data-driven Marketing"},{"id":"01t2v00000D3GZn","type":"Short Courses","subtype":"Digital Copywriting Essentials","startDate":"9/3/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3GZo","type":"Short Courses","subtype":"Digital Analytics for Marketers","startDate":"11/3/2021","topic":"Analytics"},{"id":"01t2v00000D3GZp","type":"Short Courses","subtype":"Copywriting Advanced","startDate":"16/03/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3GZq","type":"Short Courses","subtype":"Influencer Marketing","startDate":"23/03/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GZr","type":"Short Courses","subtype":"Privacy and Marketing Compliance","startDate":"23/03/2021","topic":"Responsible Marketing"},{"id":"01t2v00000D3GZs","type":"Short Courses","subtype":"Paid Search & Programmatic Fundamentals","startDate":"24/03/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZt","type":"Short Courses","subtype":"Writing for Content Marketing","startDate":"24/03/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3GZu","type":"Short Courses","subtype":"Email Marketing Essentials","startDate":"30/03/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GZv","type":"Short Courses","subtype":"Customer Journey Mapping","startDate":"28/04/2021","topic":"Customer Experience"},{"id":"01t2v00000D3GZw","type":"Certificate Courses","subtype":"Data-driven Marketing Certificate","startDate":"4/5/2021","topic":"Data-driven Marketing"},{"id":"01t2v00000D3GZx","type":"Certificate Courses","subtype":"Digital Marketing Certificate","startDate":"5/5/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GZy","type":"Short Courses","subtype":"Social Media Marketing Essentials","startDate":"6/5/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3GZz","type":"Short Courses","subtype":"Google Analytics","startDate":"11/5/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3Ga0","type":"Short Courses","subtype":"PR for Marketers","startDate":"12/5/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3Ga1","type":"Short Courses","subtype":"Digital Copywriting Essentials","startDate":"13/05/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3Ga2","type":"Short Courses","subtype":"Conversion Rate Optimisation","startDate":"25/05/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3Ga3","type":"Short Courses","subtype":"Content Marketing Strategy","startDate":"25/05/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3Ga4","type":"Short Courses","subtype":"Digital Marketing Essentials","startDate":"25/05/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3Ga5","type":"Short Courses","subtype":"Digital Marketing Strategy","startDate":"1/6/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GaF","type":"Short Courses","subtype":"Retention Marketing Strategy","startDate":"1/6/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3Ga6","type":"Short Courses","subtype":"Social Media Marketing Strategy","startDate":"3/6/2021","topic":"Digital Campaigns"},{"id":"01t2v00000D3Ga7","type":"Short Courses","subtype":"Data-Driven Marketing & Advertising","startDate":"8/6/2021","topic":"Data-driven Marketing"},{"id":"01t2v00000D3Ga8","type":"Short Courses","subtype":"Customer Journey Mapping","startDate":"8/6/2021","topic":"Customer Experience"},{"id":"01t2v00000D3Ga9","type":"Short Courses","subtype":"Privacy and Marketing Compliance","startDate":"10/6/2021","topic":"Privacy & Compliance"},{"id":"01t2v00000D3GaA","type":"Short Courses","subtype":"Writing for Content Marketing","startDate":"17/06/2021","topic":"Copywriting & Creative"},{"id":"01t2v00000D3GaB","type":"Short Courses","subtype":"Digital Analytics for Marketers","startDate":"17/06/2021","topic":"Analytics"},{"id":"01t2v00000D3GaC","type":"Short Courses","subtype":"Copywriting Essentials","startDate":"22/06/2021","topic":"Copywriting"},{"id":"01t2v00000DdlbW","type":"Short Courses","subtype":"Digital Marketing Essentials","startDate":"13/07/2021","topic":"Digital Marketing"},{"id":"01t2v00000D3GaD","type":"Short Courses","subtype":"Copywriting Advanced","startDate":"14/07/2021","topic":"Copywriting & Creative"},{"id":1,"type":"Certificate Courses","subtype":"Analytics Certificate","startDate":"Online","topic":"Analytics"},{"id":2,"type":"Short Courses","subtype":"Analytics Fundamentals","startDate":"Online","topic":"Analytics"},{"id":3,"type":"Certificate Courses","subtype":"Behavioural Economics Certificate","startDate":"Online","topic":"Customer Experience"},{"id":4,"type":"Certificate Courses","subtype":"Content Marketing Certificate","startDate":"Online","topic":"Digital Campaigns"},{"id":5,"type":"Short Courses","subtype":"Content Marketing Essentials","startDate":"Online","topic":"Digital Campaigns"},{"id":6,"type":"Short Courses","subtype":"Content Marketing Strategy","startDate":"Online","topic":"Digital Campaigns"},{"id":7,"type":"Short Courses","subtype":"Copywriting Essentials","startDate":"Online","topic":"Copywriting & Creative"},{"id":8,"type":"Short Courses","subtype":"Data Visualisation","startDate":"Online","topic":"Analytics"},{"id":9,"type":"Short Courses","subtype":"Digital Marketing Campaign Planning and management","startDate":"Online","topic":"Digital Marketing"},{"id":10,"type":"Certificate Courses","subtype":"Digital Marketing Certificate","startDate":"Online","topic":"Digital Marketing"},{"id":11,"type":"Short Courses","subtype":"Digital Marketing Channels","startDate":"Online","topic":"Digital Marketing"},{"id":12,"type":"Short Courses","subtype":"Digital Marketing Foundations","startDate":"Online","topic":"Digital Marketing"},{"id":13,"type":"Short Courses","subtype":"Email Marketing Essentials","startDate":"Online","topic":"Digital Marketing"},{"id":14,"type":"Short Courses","subtype":"Practical Predictive Analytics","startDate":"Online","topic":"Analytics"},{"id":15,"type":"Short Courses","subtype":"Privacy and Marketing Compliance","startDate":"Online","topic":"Responsible Marketing"},{"id":16,"type":"Short Courses","subtype":"Sentiment Analysis","startDate":"Online","topic":"Analytics"},{"id":17,"type":"Short Courses","subtype":"Social Media Marketing Essentials","startDate":"Online","topic":"Digital Campaigns"},{"id":18,"type":"Short Courses","subtype":"Data Pass","startDate":"Online","topic":"Responsible Marketing"}];
  const output = renderCalendar( courseData );
  (debug ? console.log(`${output}`) : null);
  $('#iq-course-calendar').html(output);
})();


/**
 * Output HTML table
 * @param {*} calendarData 
 */
function renderCalendar( calendarData ) {
  (debug ? console.log('renderCalendar() with data:') : null);
  (debug ? console.log(calendarData) : null);

  const topics = ['Digital Marketing', 'Data-driven Marketing', 'Copywriting & Creative', 'Customer Experience', 'Digital Campaigns', 'Analytics', 'Responsible Marketing'];
  
  let html = `
    <table class="course-calendar">
      <tbody>
        <tr>
          <th>Course</th>
          <th>Start date</th>
        </tr>`;

  for( let topic of topics ) {
    const cssTopic = topic.toLowerCase().split(' & ').join('-').split(' ').join('-');
    html += `<tr><th colspan="2" class="topic-header ${cssTopic}">${topic}</th></tr>`
    // render in-class courses
    for( let row of calendarData ) {
      (debug ? console.log('row:') : null);
      (debug ? console.log(row) : null);
      if(row.topic === topic && row.startDate !== 'Online') {
        html += renderCalendarRow( row );
      } 
    }
    // render online courses
    for( let row of calendarData ) {
      (debug ? console.log('row:') : null);
      (debug ? console.log(row) : null);
      if(row.topic === topic && row.startDate === 'Online') {
        html += renderCalendarRow( row );
      } 
    }
  }


  html += `
      </tbody>
    </table>`;

  return html;
}

/**
 * Output HTML table row
 * @param {*} rowData 
 */
function renderCalendarRow( rowData ) {
  (debug ? console.log('renderCalendarRow() with data:') : null);
  (debug ? console.log(rowData) : null);

  const cellTemplate = ( data ) => {
    const typeReadable = ( data['type'] === 'Short Courses' ? 'course' : 'certificate' );
    return(
      `<td>
        <div id="${ typeReadable }" class="is-${ typeReadable }">
          ${ courseLinkFromType( data['type'], data['subtype'] ) }${( typeReadable === 'certificate' ? '<span class="course-calendar__certificate-icon" data-tooltip-text="Certificate course"></span>' : '' )}
        </div>
      </td>
      <td class="ta-r">${ data['startDate'] }</td>`
    )
  };

  return `<tr class="row__${ rowData['topic'].toLowerCase() }">${ cellTemplate(rowData) }</tr>`;
}

/**
 * returns <a> from Product Type and Product Sub-type
 */
function courseLinkFromType ( type, subtype ) {
  const urlType = ( type === 'Short Courses' ? 'course' : 'certificate' );
  
  const href = `/iq/${ urlType }/${ subtype.split('&').join('and').split(' ').join('-').toLowerCase() }`;
  // return `
  // <div class="cell--centered">
  //   <a class="button button--cta button--small" href="${href}">Enrol »</a>
  // </div>`;
  return `<a href="${href}">${subtype}</a>`
}
