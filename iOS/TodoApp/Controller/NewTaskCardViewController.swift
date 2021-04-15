//  Created by 김지선 on 2021/04/09.
import UIKit

class NewTaskCardViewController: UIViewController {

    @IBOutlet weak var taskCardView: UIView!
    @IBOutlet weak var titleTextField: UITextField!
    @IBOutlet weak var contentTaskField: UITextField!
    
    

    override func viewDidLoad() {
        super.viewDidLoad()
        configureTaskCardView()
    }
    
    private func configureTaskCardView() {
        taskCardView.layer.masksToBounds = true
        taskCardView.layer.cornerRadius = 5
    }
}

//MARK: -@Action
extension NewTaskCardViewController {
    
    @IBAction func cancelButtonTouched(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }
    
    @IBAction func registerButtonTouched(_ sender: Any) {
        dismiss(animated: true, completion: nil)
        //NotificationCenter.default.post(name: <#T##NSNotification.Name#>, object: self, userInfo: <#T##[AnyHashable : Any]?#>)
    }
    
}
