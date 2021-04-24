import 'package:DevQuiz/home/widgets/appBar/app_bar_widget.dart';
import 'package:DevQuiz/home/widgets/level_button/level_button_widget.dart';
import 'package:DevQuiz/home/widgets/quiz_card/quiz_card_widget.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBarWidget(),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Container(
          margin: const EdgeInsets.symmetric(vertical: 20),
          child: Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  LevelButtonWidget(
                    label: "Fácil"
                  ),
                   LevelButtonWidget(
                    label: "Médio"
                  ),
                   LevelButtonWidget(
                    label: "Difícil"
                  ),
                   LevelButtonWidget(
                    label: "Perito"
                  ),
                ],
              ),
              SizedBox(height: 24),
              Expanded(
                child: GridView.count(
                  crossAxisSpacing: 10,
                  mainAxisSpacing: 16,
                  crossAxisCount: 2,
                  children: [
                      QuizCardWidget(),
                      QuizCardWidget(),
                      QuizCardWidget(),
                      QuizCardWidget(),
                  ],
                ),
              )
            ],
          ),
        ),
      )
    );
  }
}
