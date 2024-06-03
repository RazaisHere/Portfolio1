document.getElementById('downloadBtn').addEventListener('click', function() {
    // Path to the PDF file
    const pdfUrl = 'CV/ResumeUpdated1.pdf';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Resumi.pdf'; // The name to use for the downloaded file

    // Append the anchor to the body
    document.body.appendChild(link);

    // Programmatically click the anchor
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
});